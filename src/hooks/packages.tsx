import { createContext, ReactNode, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PackageDTO } from "../dtos/PackageDTOS";
import { api } from "../services/api";

type PackageProviderProps = {
    children: ReactNode;
}

interface IPackageContext {
    packages: PackageDTO[];
    loading: boolean;
    fetchPackagesInStorage(): Promise<void>;
    addPackages(name: string, code: string): Promise<void>;
}

const PackageContext = createContext({} as IPackageContext)


function PackageProvider({ children }: PackageProviderProps) {

    const [packages, setPackages] = useState<PackageDTO[]>([])
    const [loading, setLoading] = useState(false)

    async function addPackages(name: string, codes: string) {

        setLoading(true)

        try {

            const response = await api.post('/track', { name, codes: [codes] })
            response.data[0].name = name
            setPackages([...packages, ...response.data])

            const data = await AsyncStorage.getItem('@app-rastreioAgora:packages')
            const dataFormatted = JSON.parse(data)

            if (data) {
                await AsyncStorage.setItem('@app-rastreioAgora:packages', JSON.stringify([...dataFormatted, ...response.data]))
                return
            }

            await AsyncStorage.setItem('@app-rastreioAgora:packages', JSON.stringify(response.data))

        } catch (e) {
            console.log(e)
            throw new Error(e)
        } finally {
            setLoading(false)
        }

    }

    async function fetchPackagesInStorage() {
        setLoading(true)

        try {
            const response = await AsyncStorage.getItem('@app-rastreioAgora:packages')

            if (response) {
                setPackages(JSON.parse(response))
            }

        } catch (e: any) {
            throw new Error(e)
        } finally {
            setLoading(false)
        }

    }


    return (
        <PackageContext.Provider value={{
            fetchPackagesInStorage,
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