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
import { usePackages } from '../../hooks/packages';
import { StackScreenProps } from '@react-navigation/stack';
import { StackScreensParams } from '../../routes/stack.routes';
import { Alert } from 'react-native';
import { Load } from '../../components/Load';
import { PackageDTO } from '../../dtos/PackageDTOS';

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatório'),
    codObject: Yup
        .string()
        .required('O Código é obrigatório'),
})

type Props = StackScreenProps<StackScreensParams, 'AddPackage'>;

export function AddPackage({ route, navigation }: Props) {

    const { addPackages, loading } = usePackages()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    async function submitNewPackage(data: { name: string, codObject: string }) {
        try {
            await addPackages(data.name, data.codObject)
            navigation.navigate('Home')
        } catch (e) {
            console.log(e.message)
            switch (e.message) {
                case 'error: encomenda repetida':
                    Alert.alert('opss', 'Você já adicionou esta encomenda')
                    return;
                default:
                    Alert.alert('Ops', 'Ocorreu um erro ao adicionar sua encomenda por favor tente novamente')
            }

        }
    }

    if (loading) {
        return <Load />
    }

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
                        name='codObject'
                        placeHolder='Ex: BR1234567FN'
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        error={errors.codObject && errors.codObject.message}
                    />
                </Fields>
                <Button
                    onPress={handleSubmit(submitNewPackage)}
                    title='Salvar'
                />
            </Form>

        </Container>
    );
}