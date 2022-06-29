import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from 'react-native';
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

    const navigation = useNavigation<any>()

    function handleBack() {
        navigation.goBack()
    }
    return (
        <Container
            goBack={goBack}
        >
            {goBack && (
                <TouchableOpacity
                    onPress={handleBack}
                >
                    <Icon
                        style={{ padding: 5 }}
                        name='arrow-left'
                    />
                </TouchableOpacity>

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