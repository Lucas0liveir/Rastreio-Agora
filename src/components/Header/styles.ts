import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'


export const Container = styled.View`
    height: 60px;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.attention};

`

export const Content = styled.View`

`

export const Icon = styled<any>(Feather)`
    text-align: center;
    padding-left: 10px;
    font-size: 35px;
    color: ${({ theme }) => theme.colors.shape};
`

export const Title = styled.Text`
    padding-top: 10px;
    align-self: center;
    color: ${({ theme }) => theme.colors.shape};
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.medium};

`

export const Subtitle = styled.Text`
    align-self: center;
    align-content: flex-start;
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`

export const TextsWrapper = styled.View`

`

export const TitleWrapper = styled.View`
    height: 30px;
`