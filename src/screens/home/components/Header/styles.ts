import styled from 'styled-components/native';

// ------------------------Header--------------------------------------//
export const ProfileImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.white};
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.View`
  background-color: ${({theme}) => theme.blue};
  width: 100%;
  height: 120px;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;
