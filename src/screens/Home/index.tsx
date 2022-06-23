import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { CardPackage } from "../../components/cardsPackage";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import {
    Container,
    ButtonWrapper,
    ButtonAddPackage,
    IconAddPackage,
    Content
} from './styles'


export function Home() {

    const theme = useTheme()
    return (
        <Container>
            <Header title="Minhas Encomendas" />
                <SearchBar />
            <Content>
                <CardPackage myPackage={
                    {
                        name: 'Computador',
                        lastStatus: 'Encaminhado para salvador-BA, 21/05/2022',
                        trackCode: 'BR54453425485SE'
                    }
                } />

                <CardPackage myPackage={
                    {
                        name: 'Cadeira Gamer',
                        lastStatus: 'Objeto entregue ao destinatário, 15/05/2022',
                        trackCode: 'BR54453425435SW'
                    }
                } />

                <CardPackage myPackage={
                    {
                        name: 'Livro Clean Code',
                        lastStatus: 'Encaminhado para Eunapólis-BA, 15/05/2022',
                        trackCode: 'BR84453488485SE'
                    }
                } />
                <CardPackage myPackage={
                    {
                        name: 'Livro Clean Code',
                        lastStatus: 'Encaminhado para Eunapólis-BA, 15/05/2022',
                        trackCode: 'BR84453488485SE'
                    }
                } />
                <CardPackage myPackage={
                    {
                        name: 'Livro Clean Code',
                        lastStatus: 'Encaminhado para Eunapólis-BA, 15/05/2022',
                        trackCode: 'BR84453488485SE'
                    }
                } />
                <CardPackage myPackage={
                    {
                        name: 'Livro Clean Code',
                        lastStatus: 'Encaminhado para Eunapólis-BA, 15/05/2022',
                        trackCode: 'BR84453488485SE'
                    }
                } />
                <CardPackage myPackage={
                    {
                        name: 'Livro Clean Code',
                        lastStatus: 'Encaminhado para Eunapólis-BA, 15/05/2022',
                        trackCode: 'BR84453488485SE'
                    }
                } />
            </Content>
            <ButtonWrapper>
                <ButtonAddPackage>
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