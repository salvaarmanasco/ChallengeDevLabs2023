import styled from "styled-components/native";

// ------------------------Header--------------------------------------//
export const ProfileImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

// ------------------------Containers--------------------------------------//
export const Container = styled.View`
  background-color: ${({ theme }) => theme.blue};
  width: 100%;
  height: 120px;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

export const CryptoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0px 24px;
  padding: 30px 0px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.divider};
`;

export const ContainerNameAndSymbol = styled.View`
  align-items: flex-end;
  flex-wrap: wrap;
  justify-self: end;
  flex: 1;
`;
export const ContainerPriceAndPercent = styled.View`
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-self: end;
`;

export const ImageContainer = styled.View``;
// ------------------------CryptoList--------------------------------------//

export const CryptoText = styled.View``;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: 800;
  margin-left: 10px;
`;

export const Symbol = styled.Text`
  font-size: 15px;
  margin-left: 10px;
`;

export const PriceText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Percent = styled.Text<{ percent: number }>`
  color: ${({ percent, theme }) =>
    percent > 0 ? theme.priceGreen : theme.priceRed};
`;

export const Arrows = styled.Image`
  width: 15px;
  height: 15px;
`;
// -------------------------AddButton-------------------------------------//

export const ButtonAdd = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-top: 40px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.ligthBlue};
`;
