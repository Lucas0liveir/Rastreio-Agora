import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const ButtonWrapper = styled.View`
    position: absolute;
    align-self: flex-end;
    elevation: 3;
    right: 15px;
    top: ${Dimensions.get('window').height * 0.8}px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const ButtonAddPackage = styled.TouchableOpacity`
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingHorizontal: 10
    },
    showsVerticalScrollIndicator: false
})``

export const IconAddPackage = styled<any>(MaterialIcons)`
`
