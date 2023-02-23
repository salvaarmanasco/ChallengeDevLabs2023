import React from "react";
import { View, Text, FlatList } from "react-native";

import CoinsInfo from "types/CoinsInfo";
import Coin from "./Coin";

const BTC = require("../../../../assets/img/bitcoin.png");
const ETH = require("../../../../assets/img/ethereum.png");
const XRP = require("../../../../assets/img/xrp.png");

const CryptoArr: CoinsInfo[] = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: 24800.68,
    percent: 0.67,
    img: BTC,
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: 1680.83,
    percent: 1.01,
    img: ETH,
  },
  {
    id: "3",
    name: "XRP",
    symbol: "XRP",
    price: 0.3928,
    percent: -2.76,
    img: XRP,
  },
];

console.log(CryptoArr);

const CryptoList = () => {
  return (
    <View>
      <FlatList
        data={CryptoArr}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Coin item={item} />}
      />
    </View>
  );
};

export default CryptoList;
