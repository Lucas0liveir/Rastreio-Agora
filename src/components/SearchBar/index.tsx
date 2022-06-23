import React from 'react';
import { useTheme } from 'styled-components';

import {
    Container,
    Input,
    IconSearch,
} from './styles';

export function SearchBar() {

    const theme = useTheme()

    return (
        <Container>
            <Input
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