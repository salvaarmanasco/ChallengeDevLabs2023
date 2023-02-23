import React from "react";
import { Text, Image } from "react-native";
import CoinsInfo from "types/CoinsInfo";

const arrowUp = require("../../../../assets/img/arrowup.png");
const arrowDown = require("../../../../assets/img/arrowdown.png");

import {
  CryptoContainer,
  ImageContainer,
  ContainerNameAndSymbol,
  ContainerPriceAndPercent,
  Name,
  Symbol,
  PriceText,
  Percent,
  CryptoText,
  Arrows,
} from "./styles";
const Coin = ({ item }: { item: CoinsInfo }) => {
  return (
    <CryptoContainer>
      <ImageContainer>
        <Image source={item.img} />
      </ImageContainer>
      <ContainerNameAndSymbol>
        <CryptoText>
          <Name>{item.name}</Name>
          <Symbol>{item.symbol}</Symbol>
        </CryptoText>
      </ContainerNameAndSymbol>
      <ContainerPriceAndPercent>
        <PriceText>${item.price}</PriceText>
        <Percent percent={item.percent}>
          <Arrows source={item.percent > 0 ? arrowUp : arrowDown} />
          <Text>{item.percent}%</Text>
        </Percent>
      </ContainerPriceAndPercent>
    </CryptoContainer>
  );
};

export default Coin;
