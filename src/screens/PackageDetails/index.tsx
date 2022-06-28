import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { CardStatus } from '../../components/CardStatus';
import { Header } from '../../components/Header';
import { StackScreensParams } from '../../routes/stack.routes';

import {
    Container,
    Content,
    Line
} from './styles';

type Props = StackScreenProps<StackScreensParams, 'PackageDetails'>;

export function PackageDetails({ route, navigation }: Props) {

    const { item } = route.params

    return (
        <Container>
            <Header goBack title={item.trackCod} subtitle={'Código'} />
            <Content
                data={[1, 2, 3]}
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => <CardStatus />}
                ItemSeparatorComponent={() => <Line />}
            />

        </Container>
    );
}