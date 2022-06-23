import React from "react";
import {
    Container,
    Icon,
    Title,
    Content
} from './styles'

type Props = {
    title: string;
    goBack?: boolean
}

export function Header({ title, goBack }: Props) {

    return (
        <Container>
            {!goBack ? (
                <Icon
                    name='menu'
                />
            ) : (
                <Icon
                    name='arrow-left'
                />
            )
            }

            <Title>
                {title}
            </Title>
            <Content />


        </Container>
    )
}