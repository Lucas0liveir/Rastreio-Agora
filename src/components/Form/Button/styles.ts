import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

export const Container = styled.TouchableOpacity<any>`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 18px;
    border-radius: 5px;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape};
`