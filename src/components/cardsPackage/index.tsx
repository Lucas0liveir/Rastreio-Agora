import React from "react";
import {
    Container,
    PackageName,
    PackageLastStatus,
    PackageCode,
    ContainerStatus,
    IconStatusRefer,
    IconStatusReceived,
} from './styles'

type Props = {
    myPackage: any
}

export function CardPackage({ myPackage }: Props) {


    return (
        <Container>
            <PackageName>
                {myPackage.name}
            </PackageName>
            <ContainerStatus>
                {String(myPackage.lastStatus).includes('entregue') ? (
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
                    type={String(myPackage.lastStatus).includes('entregue') ? 'sucess' : ''}
                >
                    {myPackage.lastStatus}
                </PackageLastStatus>
            </ContainerStatus>

            <PackageCode>
                {myPackage.trackCode}
            </PackageCode>
        </Container>
    )
}