import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



import Inicio from "./views/Inicio"
import Login from "./views/Login"
import CrearCuenta from './views/CrearCuenta';
import Home from './views/Home';
import Perfil from './views/Perfil';
import Configuracion from './views/Configuracion';


import StackNavigation from './navigation/StackNavigation';






import { Root } from 'native-base';

const App = () => {
  return (
    <>
    <Root>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
      </Root>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
