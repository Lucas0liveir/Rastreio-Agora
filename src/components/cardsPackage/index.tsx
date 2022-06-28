import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
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

interface Props extends BorderlessButtonProps {
    myPackage: PackageDTO
}

export function CardPackage({ myPackage, ...rest }: Props) {

    console.log(myPackage)

    return (
        <Container
            {...rest}
        >
            <ContainerDateInfo>
                <DateInfo>
                    {dayjs(myPackage.eventos[0].dtHrCriado).format('DD/MM/YYYY')}
                </DateInfo>
                <DateHourInfo>
                    {dayjs(myPackage.eventos[0].dtHrCriado).format('HH:mm:ss')}
                </DateHourInfo>
            </ContainerDateInfo>
            <Content>
                <PackageName>
                    {myPackage.name}
                </PackageName>
                <ContainerStatus>
                    {String(myPackage?.eventos[0]?.descricao).includes('entregue') ? (
                        <IconStatusReceived
                            name={'checkcircle'}
                        />
                    ) : (
                        <IconStatusRefer
                            name='truck'
                        />
                    )

                    }

                    <PackageLastStatus
                        type={String(myPackage.eventos[0].descricao).includes('entregue') ? 'sucess' : ''}
                    >
                        {myPackage.eventos[0].descricao}
                    </PackageLastStatus>
                </ContainerStatus>

                <PackageCode>
                    {myPackage.codObjeto}
                </PackageCode>
            </Content>

        </Container>
    )
}