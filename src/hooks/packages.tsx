import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PackageDTO } from "../dtos/PackageDTOS";
import { api } from "../services/api";
import { Alert } from "react-native";
import { diffBetweenPackages } from "../services/SendNotifications";

type PackageProviderProps = {
    children: ReactNode;
}

interface IPackageContext {
    packages: PackageDTO[];
    setPackages(packages: PackageDTO[]): void;
    loading: boolean;
    fetchPackagesInStorage(option?: string): Promise<void>;
    addPackages(name: string, code: string): Promise<void>;
}

const PackageContext = createContext({} as IPackageContext)


function PackageProvider({ children }: PackageProviderProps) {

    const [packages, setPackages] = useState<PackageDTO[]>([])
    const [loading, setLoading] = useState(false)

    async function addPackages(name: string, codes: string) {

        setLoading(true)

        try {

            if (packages.findIndex(item => item.codObjeto === codes[0]) > -1) {

                throw new Error('error: encomenda repetida')
            }

            const response = await api.post('/track', { codes: [String(codes).toUpperCase()] })
            response.data[0].name = name

            if (!response.data[0].eventos) {
                response.data[0].eventos = []
            }

            setPackages([...packages, ...response.data])

            const data = await AsyncStorage.getItem('@app-rastreioAgora:packages')

            if (data) {
                const dataFormatted = JSON.parse(data)
                await AsyncStorage.setItem('@app-rastreioAgora:packages', JSON.stringify([...dataFormatted, ...response.data]))
                return
            }

            await AsyncStorage.setItem('@app-rastreioAgora:packages', JSON.stringify(response.data))
            return

        } catch (e) {
            console.log(e)
            throw new Error(e)
        } finally {
            setLoading(false)
        }

    }

    async function fetchPackagesInStorage(option?: string) {
        setLoading(true)

        try {
            const response = await AsyncStorage.getItem('@app-rastreioAgora:packages')
            let packagesData = response ? JSON.parse(response) as PackageDTO[] : [] as PackageDTO[]

            if (packagesData.length > 0) {
                const codes = [...packagesData
                    .map(item => item.codObjeto)]

                const { data } = await api.post('/track', { codes }) as { data: PackageDTO[] }

                const isDiff = diffBetweenPackages(packagesData, data)

                if (isDiff) {
                    data.forEach((item, index) => {
                        if (item.eventos?.length > 0) {
                            packagesData[index].eventos = item.eventos
                            packagesData[index].eventos[0].isNewStatus = true
                        }

                    })
                }
            }
            setPackages(packagesData)


        } catch (e: any) {
            throw new Error(e)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 100)
        }

    }


    return (
        <PackageContext.Provider value={{
            fetchPackagesInStorage,
            setPackages,
            addPackages,
            loading,
            packages
        }}>
            {children}
        </PackageContext.Provider>
    )

}

function usePackages() {
    const context = useContext(PackageContext)
    return context;
}

export { PackageProvider, usePackages }