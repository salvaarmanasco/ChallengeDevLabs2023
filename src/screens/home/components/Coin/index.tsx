import React from 'react';
import {Image, View} from 'react-native';
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
  Arrows,
  PercentUp,
  PercentDown,
  PercentView,
} from './styles';

const Coin = ({item}: {item: CoinsInfo}) => (
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
      {item.percent > 0 ? (
        <PercentView>
          <Arrows source={item.percent > 0 ? arrowUp : arrowDown} />
          <PercentUp>{item.percent}%</PercentUp>
        </PercentView>
      ) : (
        <PercentView>
          <Arrows source={item.percent > 0 ? arrowUp : arrowDown} />
          <PercentDown>{item.percent}%</PercentDown>
        </PercentView>
      )}
    </ContainerPriceAndPercent>
  </CryptoContainer>
);

export default Coin;
