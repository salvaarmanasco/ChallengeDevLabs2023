import styled from 'styled-components/native';

export const CryptoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0px 24px;
  padding: 30px 0px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.divider};
`;

export const ContainerNameAndSymbol = styled.View`
  align-items: flex-end;
  flex-wrap: wrap;
  flex: 1;
`;
export const ContainerPriceAndPercent = styled.View`
  padding: 0px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-left: 10px;
  color: ${({theme}) => theme.priceText};
`;

export const Symbol = styled.Text`
  font-size: 15px;
  margin-left: 10px;
`;

export const PriceText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.priceText};
`;

export const Arrows = styled.Image`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  margin-top: 7px;
  position: relative;
`;

export const PercentUp = styled.Text`
  color: ${({theme}) => theme.priceGreen};
  font-size: 15px;
`;
export const PercentDown = styled.Text`
  color: ${({theme}) => theme.priceRed};
  font-size: 15px;
`;

export const PercentView = styled.View`
  flex-direction: row;
`;
