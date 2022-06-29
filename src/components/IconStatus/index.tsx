import React from 'react';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";
import { useTheme } from 'styled-components';

interface Props {
    type: string;
    size?: number;
}

export function IconStatus({ type, size }: Props) {

    const theme = useTheme()

    switch (type) {
        case 'Entregue':
            return <AntDesign
                size={size ? size : 35}
                color={theme.colors.sucess}
                name='checkcircle'
            />
        case 'Truck':
            return <MaterialCommunityIcons
                size={size ? size : 35}
                color={theme.colors.primary}
                name='truck-fast-outline'
            />
        case 'Saiu para entrega':
            return <MaterialCommunityIcons
                size={size ? size : 35}
                color={theme.colors.info_attention}
                name='truck-delivery-outline'
            />
        case 'Fiscalização aduaneira finalizada':
            return <Feather
                size={size ? size : 35}
                color={theme.colors.sucess_light}
                name='dollar-sign'
            />
        case 'Carteiro não atendido':
            return <AntDesign
                size={size ? size : 35}
                color={theme.colors.attention}
                name='exclamationcircleo'
            />
        case 'Flag Brazil':
            return <CountryFlag isoCode="br" size={size ? 10 : 20} />
        default:
            return <Feather
                size={size ? size : 35}
                name='package'
            />
    }
}