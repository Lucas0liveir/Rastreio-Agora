import React, { useState } from "react";
import { PackageDTO } from "../../dtos/PackageDTOS";
import dayjs from "dayjs";
import {
    SimpleLineIcons,
    Entypo,
    MaterialIcons
} from '@expo/vector-icons'
import {
    Container,
    PackageName,
    PackageLastStatus,
    PackageCode,
    ContainerStatus,
    ContainerDateInfo,
    Content,
    DateInfo,
    DateHourInfo,
    OptionWrapper,
    OptionButton,
    Options,
    ButtonDelete,
} from './styles'
import { TouchableOpacityProps, LayoutAnimation, Platform, UIManager, Alert, View } from "react-native";
import { IconStatus } from "../IconStatus";
import { getTypeStatus } from "../../Utils/getTypeStatus";
import { useTheme } from "styled-components";
import { usePackages } from "../../hooks/packages";
import { RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props extends TouchableOpacityProps {
    myPackage: PackageDTO
}

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export function CardPackage({ myPackage, ...rest }: Props) {
    const theme = useTheme()
    const { packages, setPackages, fetchPackagesInStorage } = usePackages()
    const [options, setOptions] = useState(false)


    function handleOptionsShow() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOptions(state => !state)
    }



    async function confirmDelete(name: string, cod: string) {

        Alert.alert(
            "Deletar objeto",
            `Tem certeza que deseja deletar o objeto ${name}?`,
            [
                {
                    text: "Cancelar",
                    onPress: () => { },
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: async () => await handleDeletePackage(cod).catch(e => { Alert.alert(e) }),
                }
            ],
        );
    }

    async function handleDeletePackage(cod: string) {
        console.log('=>', cod)
        const index = packages.findIndex(item => item.codObjeto === cod)
        const updatePackage = packages
        updatePackage.splice(index, 1)
        console.log(updatePackage)

        try {
            await AsyncStorage.setItem('@app-rastreioAgora:packages', JSON.stringify(updatePackage))
            await fetchPackagesInStorage()

        } catch (e: any) {
            console.log(e)
            throw new Error(e)
        }
    }

    return (
        <Container
            isNewStatus={myPackage?.eventos[0]?.isNewStatus ? myPackage?.eventos[0]?.isNewStatus : false}
        >
            {!myPackage?.eventos[0]?.dtHrCriado && (
                <View style={{ marginLeft: 30, width: RFValue(300) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <PackageName>
                            {myPackage?.name}
                        </PackageName>
                        <Options>
                            <ButtonDelete
                                onPress={() => confirmDelete(myPackage.name, myPackage.codObjeto)}
                            >
                                <Entypo
                                    color={theme.colors.attention}
                                    size={25}
                                    name='trash'
                                />
                            </ButtonDelete>
                        </Options>
                    </View>
                    <ContainerStatus>
                        <IconStatus size={20} type={getTypeStatus(myPackage?.eventos[0]?.descricao)} />

                        <PackageLastStatus

                            type={String(myPackage?.eventos[0]?.descricao).includes('entregue') ? 'sucess' : ''}
                        >
                            {String(myPackage?.mensagem).split(':')[1]}
                        </PackageLastStatus>
                    </ContainerStatus>

                    <PackageCode>
                        {myPackage?.codObjeto}
                    </PackageCode>
                </View>
            )

            }
            {!options && myPackage?.eventos[0]?.dtHrCriado && (
                <ContainerDateInfo>
                    <DateInfo>
                        {dayjs(myPackage?.eventos[0]?.dtHrCriado).format('DD/MM/YYYY')}
                    </DateInfo>
                    <DateHourInfo>
                        {dayjs(myPackage?.eventos[0]?.dtHrCriado).format('HH:mm:ss')}
                    </DateHourInfo>
                </ContainerDateInfo>
            )

            }
            {myPackage?.eventos[0]?.dtHrCriado &&
                (
                    <Content
                        {...rest}
                        disabled={myPackage?.eventos[0]?.dtHrCriado ? false : true}
                    >
                        <PackageName>
                            {myPackage?.name}
                        </PackageName>

                        <ContainerStatus>
                            <IconStatus size={20} type={getTypeStatus(myPackage?.eventos[0]?.descricao)} />

                            <PackageLastStatus
                                style={{ marginLeft: 5 }}
                                type={String(myPackage?.eventos[0]?.descricao).includes('entregue') ? 'sucess' : ''}
                            >
                                {myPackage?.eventos[0]?.descricao}
                            </PackageLastStatus>
                        </ContainerStatus>

                        <PackageCode>
                            {myPackage?.codObjeto}
                        </PackageCode>
                    </Content>
                )
            }
            {myPackage?.eventos[0]?.dtHrCriado && (
                <OptionWrapper>
                    <OptionButton
                        onPress={handleOptionsShow}
                    >
                        {options ? (
                            <MaterialIcons
                                size={25}
                                name={'close'}
                            />
                        ) : (
                            <SimpleLineIcons
                                size={18}
                                name={'options-vertical'}
                            />
                        )

                        }

                    </OptionButton>
                </OptionWrapper>
            )

            }

            {options &&
                (
                    <Options>
                        <ButtonDelete
                            onPress={() => confirmDelete(myPackage.name, myPackage.codObjeto)}
                        >
                            <Entypo
                                color={theme.colors.attention}
                                size={25}
                                name='trash'
                            />
                        </ButtonDelete>
                    </Options>
                )


            }

        </Container>
    )
}