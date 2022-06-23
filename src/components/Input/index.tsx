import React from 'react';

import {
    Container
} from './styles';

interface Props {
    placeHolder: string;
    onChangeText(): void
}

export function Input({ placeHolder, onChangeText }: Props) {
    return (
        <Container
            placeholder={placeHolder}
            onChangeText={onChangeText}
        />
    );
}