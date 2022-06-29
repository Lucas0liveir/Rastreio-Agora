import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { CardPackage } from "../../components/cardsPackage";
import { Header } from "../../components/Header";
import { Load } from "../../components/Load";
import { SearchBar } from "../../components/SearchBar";
import { usePackages } from "../../hooks/packages";
import { StackScreensParams } from "../../routes/stack.routes";
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

    useEffect(() => {
        fetchPackagesOnHomeScreen()
    }, [])

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
            <SearchBar />

            {isError ? (
                <ErrorContainer
                onPress={fetchPackagesOnHomeScreen}
                >
                    <Retry>Erro ao carregar suas encomendas. Clique aqui para tentar Novamente</Retry>
                </ErrorContainer>

            ) : (
                <Content
                    data={packages}
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