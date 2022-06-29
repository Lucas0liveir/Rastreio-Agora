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
            <Header detailScreen goBack title={item.codObjeto} subtitle={'Código'} />
            <Content
                data={item.eventos}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => <CardStatus events={item}/>}
                ItemSeparatorComponent={() => <Line />}
            />

        </Container>
    );
}