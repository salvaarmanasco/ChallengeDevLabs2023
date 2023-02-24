import React from 'react';
import {Text, Image, View} from 'react-native';
import CoinsInfo from 'types/CoinsInfo';

import arrowUp from '../../../../../assets/img/arrowup.png';
import arrowDown from '../../../../../assets/img/arrowdown.png';

import {
  CryptoContainer,
  ContainerNameAndSymbol,
  ContainerPriceAndPercent,
  Name,
  Symbol,
  PriceText,
  Percent,
  Arrows,
  PercentUp,
  PercentDown,
  ArrowContainer,
} from './styles';

const Coin = ({item}: {item: CoinsInfo}) => {
  return (
    <CryptoContainer>
      <Image source={item.img} />
      <ContainerNameAndSymbol>
        <View>
          <Name>{item.name}</Name>
          <Symbol>{item.symbol}</Symbol>
        </View>
      </ContainerNameAndSymbol>
      <ContainerPriceAndPercent>
        <PriceText>${item.price}</PriceText>
        <Percent percent={item.percent}>
          <ArrowContainer>
            <Arrows source={item.percent > 0 ? arrowUp : arrowDown} />
          </ArrowContainer>
          <View>
            {item.percent > 0 ? (
              <PercentUp>{item.percent}%</PercentUp>
            ) : (
              <PercentDown>{item.percent}%</PercentDown>
            )}
          </View>
        </Percent>
      </ContainerPriceAndPercent>
    </CryptoContainer>
  );
};

export default Coin;
