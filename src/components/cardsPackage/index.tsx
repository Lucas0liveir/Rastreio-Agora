import React from "react";
import { PackageDTO } from "../../dtos/PackageDTOS";
import dayjs from "dayjs";
import {
    Container,
    PackageName,
    PackageLastStatus,
    PackageCode,
    ContainerStatus,
    IconStatusRefer,
    IconStatusReceived,
    ContainerDateInfo,
    Content,
    DateInfo,
    DateHourInfo
} from './styles'
import { TouchableOpacityProps } from "react-native";
import { IconStatus } from "../IconStatus";
import { getTypeStatus } from "../../Utils/getTypeStatus";

interface Props extends TouchableOpacityProps {
    myPackage: PackageDTO
}

export function CardPackage({ myPackage, ...rest }: Props) {

    return (
        <Container
            {...rest}
        >
            <ContainerDateInfo>
                <DateInfo>
                    {dayjs(myPackage?.eventos[0].dtHrCriado).format('DD/MM/YYYY')}
                </DateInfo>
                <DateHourInfo>
                    {dayjs(myPackage?.eventos[0].dtHrCriado).format('HH:mm:ss')}
                </DateHourInfo>
            </ContainerDateInfo>
            <Content>
                <PackageName>
                    {myPackage?.name}
                </PackageName>
                <ContainerStatus>
                    <IconStatus size={20} type={getTypeStatus(myPackage?.eventos[0]?.descricao)} />

                    <PackageLastStatus
                        type={String(myPackage?.eventos[0].descricao).includes('entregue') ? 'sucess' : ''}
                    >
                        {myPackage?.eventos[0].descricao}
                    </PackageLastStatus>
                </ContainerStatus>

                <PackageCode>
                    {myPackage?.codObjeto}
                </PackageCode>
            </Content>

        </Container>
    )
}