import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
    Container,
    Input,
    IconSearch,
} from './styles';

interface Props extends TextInputProps {

}

export function SearchBar({ ...rest }: Props) {

    const theme = useTheme()

    return (
        <Container>
            <Input
                {...rest}
                placeholder='pesquise aqui...'
            />
            <IconSearch
                name='search'
                size={35}
                color={theme.colors.text_dark}
            />
        </Container>
    );
}