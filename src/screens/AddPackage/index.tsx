import React from 'react';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/Form/InputForm';
import { Header } from '../../components/Header';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
    Container,
    Form,
    Fields,
    Label
} from './styles';

import { Button } from '../../components/Form/Button';

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatório'),
    trackCode: Yup
        .string()
        .required('O Código é obrigatório'),
})

export function AddPackage() {

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <Container>
            <Header goBack title='Adicione sua encomenda' />
            <Form>
                <Fields>
                    <Label>Nome da encomenda</Label>
                    <InputForm
                        control={control}
                        name='name'
                        placeHolder='Ex: Computador'
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        error={errors.name && errors.name.message}
                    />

                    <Label>Código de Rastreio</Label>
                    <InputForm
                        control={control}
                        name='trackCode'
                        placeHolder='Ex: BR1234567FN'
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        error={errors.trackCode && errors.trackCode.message}
                    />
                </Fields>
                <Button
                    title='Salvar'
                />
            </Form>

        </Container>
    );
}