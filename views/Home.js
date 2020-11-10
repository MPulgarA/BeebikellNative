import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Button, Text, Toast, View, Tab} from 'native-base';

import globalStyles from '../styles/global';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CrearCuenta from './CrearCuenta';
import Perfil from './Perfil';
import Configuracion from './Configuracion';


const Home = () => {
        
    return ( 
        <>
          <Text>Hola</Text> 
        </>
     );
}

const style = StyleSheet.create({

});


 
export default Home;
