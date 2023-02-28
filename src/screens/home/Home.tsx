import React, {useEffect} from 'react';
import CryptoList from './components/CryptoList';
import Header from './components/Header';
import {ButtonAdd, ButtonText} from './styles';

interface Navigation {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

const Home = ({navigation}: Navigation) => (
  <>
    <Header />
    <CryptoList />
    <ButtonAdd
      title="AddButton"
      onPress={() => navigation.navigate('AddCrypto')}>
      <ButtonText>+ Add a Cryptocurrency</ButtonText>
    </ButtonAdd>
  </>
);

export default Home;
