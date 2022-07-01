import styled from 'styled-components/native';
import { EvilIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  flex-direction: row;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput<any>`
    height: 100%;
    width: 90%;
`

export const IconSearch = styled<any>(EvilIcons)``