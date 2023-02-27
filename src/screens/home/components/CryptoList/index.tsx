import React from 'react';
import {View, FlatList} from 'react-native';

import CoinsInfo from 'types/CoinsInfo';
import Coin from '../Coin';

import BTC from '../../../../../assets/img/bitcoin.png';
import ETH from '../../../../../assets/img/ethereum.png';
import XRP from '../../../../../assets/img/xrp.png';

const CryptoArr: CoinsInfo[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 24800.68,
    percent: 0.67,
    img: BTC,
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1680.83,
    percent: 1.01,
    img: ETH,
  },
  {
    id: '3',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.3928,
    percent: -2.76,
    img: XRP,
  },
];

const CryptoList = () => (
  <View>
    <FlatList
      data={CryptoArr}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Coin item={item} />}
    />
  </View>
);

export default CryptoList;
