import styled from 'styled-components/native';

export const ButtonAdd = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  font-size: 30px;
  padding-top: 40px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  margin-bottom: 6px;
  color: ${({theme}) => theme.addText};
`;
