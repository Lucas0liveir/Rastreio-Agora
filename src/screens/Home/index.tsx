import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { CardPackage } from "../../components/cardsPackage";
import { useFocusEffect } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Header } from "../../components/Header";
import { Load } from "../../components/Load";
import { SearchBar } from "../../components/SearchBar";
import { usePackages } from "../../hooks/packages";
import { StackScreensParams } from "../../routes/stack.routes";
import { PackageDTO } from "../../dtos/PackageDTOS";
import {
    Container,
    ButtonWrapper,
    ButtonAddPackage,
    IconAddPackage,
    Content,
    ErrorContainer,
    Retry
} from './styles'

type Props = StackScreenProps<StackScreensParams, 'Home'>;

export function Home({ route, navigation }: Props) {
    const theme = useTheme()
    const { fetchPackagesInStorage, loading, packages } = usePackages()
    const [isError, setIsError] = useState(false)
    const [filteredPackages, setFilteredPackages] = useState<PackageDTO[]>([])
    const [packagesSearch, setPackagesSearch] = useState<PackageDTO[]>([])

    useEffect(() => {
        const packagesFiltered = packages.filter(item => !item.eventos[0]?.descricao.includes('entregue ao destinatário'))
        setFilteredPackages(packagesFiltered)
     }, [packages])

    useFocusEffect(useCallback(() => {
        fetchPackagesOnHomeScreen()

        const packagesFiltered = packages.filter(item => !item.eventos[0]?.descricao.includes('entregue ao destinatário'))
        setFilteredPackages(packagesFiltered)

    }, []))

    function onSearchPackage(name: string) {

        if (filteredPackages.length === 0) {
            return
        }

        if (name === '') {
            setPackagesSearch([])
            return
        }

        try {
            const regex = new RegExp(`${String(name).trim()}`, 'i')

            const packagesFiltered = filteredPackages.filter(item => item.name.search(regex) >= 0)

            if (packagesFiltered.length > 0)
                setPackagesSearch(packagesFiltered)

            return
        } catch (e) {
            console.log(e)
        }

    }

    async function fetchPackagesOnHomeScreen() {
        isError && setIsError(false)

        try {
            await fetchPackagesInStorage()
        } catch (e: any) {
            setIsError(true)
            console.log(e)
        }
    }

    function handleNavigateAddPackage() {
        navigation.navigate('AddPackage')
    }

    function handleNavigatePackageDetails(item: any) {
        navigation.navigate('PackageDetails', { item })
    }

    if (loading) {
        return <Load />
    }

    return (
        <Container>
            <Header title="Rastreio Agora" />
            <SearchBar
                onChangeText={onSearchPackage}
            />

            {isError ? (
                <ErrorContainer
                    onPress={fetchPackagesOnHomeScreen}
                >
                    <Retry>Erro ao carregar suas encomendas. Clique aqui para tentar Novamente</Retry>
                </ErrorContainer>

            ) : (
                <Content
                    data={packagesSearch.length > 0 ? packagesSearch : filteredPackages}
                    keyExtractor={(item) => item.codObjeto}
                    renderItem={({ item }) => <CardPackage
                        onPress={() => {
                            handleNavigatePackageDetails({
                                ...item
                            })
                        }}
                        myPackage={
                            item
                        } />}
                />
            )

            }

            <ButtonWrapper>
                <ButtonAddPackage
                    onPress={handleNavigateAddPackage}
                >
                    <IconAddPackage
                        name={'add'}
                        size={35}
                        color={theme.colors.shape}
                    />
                </ButtonAddPackage>
            </ButtonWrapper>

        </Container>


    )
}