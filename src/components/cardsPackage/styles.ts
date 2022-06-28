import styled from 'styled-components/native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'

type PropsText = {
    type: string
}

export const Container = styled(BorderlessButton)`
    margin: 8px 0;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.shape}; 
    padding: 20px 0;
    flex-direction: row;
`

export const PackageName = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.bold};

`

export const PackageLastStatus = styled.Text<PropsText>`
    color: ${({ theme, type }) => type === 'sucess' ? theme.colors.sucess : theme.colors.text_dark};
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const PackageCode = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.regular};
`
export const ContainerStatus = styled.View`
    padding: 8px 0;
    width: 100%;
    align-items: center;
    flex-direction: row;
`

export const IconStatusReceived = styled<any>(AntDesign)`
    font-size: 15px;
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.sucess};
`

export const IconStatusRefer = styled<any>(MaterialCommunityIcons)`
    font-size: 15px;
    margin-right: 5px;
    color: black;
`

export const ContainerDateInfo = styled.View`
    align-items: center;
    justify-content: center;
    padding: 0 10px;
`

export const Content = styled.View``

export const DateInfo = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const DateHourInfo = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: 10px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
`

