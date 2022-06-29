import styled from 'styled-components/native'

type PropsText = {
    type: string
}

export const Container = styled.TouchableOpacity`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.shape}; 
    padding: 10px 20px 10px 0;
    flex-direction: row;
`

export const PackageName = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.bold};

`

export const PackageDescription = styled.Text<PropsText>`
    color: ${({ theme, type }) => type === 'sucess' ? theme.colors.sucess : theme.colors.text_dark};
    font-size: 14px;
    width: 100%;
    margin-bottom: 10px;
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
`

export const ContainerDateInfo = styled.View`
    align-items: center;
    justify-content: center;
    padding: 0 10px;
`

export const Content = styled.View`
    width: 80%;
`

export const DateInfo = styled.Text`
    margin-top: 5px;
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

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 12px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const PackageInfo = styled.Text`
    padding-left: 3px;
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: 12px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const ContainerPackageInfo = styled.View`
    width: 100%;
`

export const PackageInfoWrapper = styled.View`
    width: 100%;
    flex-direction: row;
`

export const PackageDetail = styled.Text`
    color: ${({ theme }) => theme.colors.attention};
    font-size: 12px;
    width: 100%;
    margin-bottom: 10px;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.regular};
`