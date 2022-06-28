import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``

export const Line = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text_detail};
`