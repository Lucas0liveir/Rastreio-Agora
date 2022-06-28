import React from "react";
import {
    Container,
    Icon,
    Title,
    Content,
    Subtitle,
    TextsWrapper,
    TitleWrapper
} from './styles'

type Props = {
    title: string;
    goBack?: boolean;
    subtitle?: string;
}

export function Header({ title, goBack, subtitle }: Props) {

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

            <TextsWrapper>
                <TitleWrapper>
                    <Title>
                        {title}
                    </Title>
                </TitleWrapper>

                {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </TextsWrapper>

            <Content />


        </Container>
    )
}