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
    detailScreen?: boolean;
}

export function Header({ title, goBack, subtitle, detailScreen }: Props) {

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
                    <Title detailScreen={detailScreen}>
                        {title}
                    </Title>
                </TitleWrapper>

                {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </TextsWrapper>

            <Content />


        </Container>
    )
}