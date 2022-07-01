import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions, FlatList, FlatListProps } from "react-native";
import { BorderlessButton, BorderlessButtonProps } from "react-native-gesture-handler";
import { ReactElement } from "react";
import { PackageDTO } from "../../dtos/PackageDTOS";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`
type PackageAddButton = {
    children: ReactElement
}

export const ButtonWrapper = styled.View`
    position: absolute;
    align-self: flex-end;
    elevation: 3;
    right: 15px;
    bottom: 60px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const ButtonAddPackage = styled(BorderlessButton)<any>`
    align-items: center;
    height: 100%;
    justify-content: center;
`

export const ErrorContainer = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Retry = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    text-align: center;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.text};
`


export const Content = styled(FlatList as new (props: FlatListProps<PackageDTO>) => FlatList<PackageDTO>).attrs({
    contentContainerStyle: {
        paddingHorizontal: 10
    },
    showsVerticalScrollIndicator: false
})``

export const IconAddPackage = styled<any>(MaterialIcons)`
`
