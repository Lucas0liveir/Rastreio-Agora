import styled from 'styled-components/native';

export const Container = styled.TextInput`
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.shape};
    margin-bottom: 10px;
`;
