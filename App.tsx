import React from 'react';
// -----------------------------------------Styled Components-------------------------------------------//
import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';
// -----------------------------------------Navigation-------------------------------------------//
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// -----------------------------------------Components-------------------------------------------//
import Home from './src/screens/home/Home';
// -----------------------------------------Redux-------------------------------------------//

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
