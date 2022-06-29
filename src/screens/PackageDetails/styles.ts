import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { EventsPackageStatus } from '../../dtos/EventsPackageStatus';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape}; 
`;

export const Content = styled(FlatList as new (props: FlatListProps<EventsPackageStatus>) => FlatList<EventsPackageStatus>).attrs({
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