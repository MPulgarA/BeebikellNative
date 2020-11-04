import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Inicio from "./views/Inicio"
import Login from "./views/Login"
import CrearCuenta from './views/CrearCuenta';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">

          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{
              title:"Inicio",
              headerShown: false
            }}          
          />

          <Stack.Screen
            name="CrearCuenta"
            component={CrearCuenta}
            options={{
              title:"Crear Cuenta",
              headerShown: false
            }}          
          />
          
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title:"Login",
              headerShown: false
            }}          
          />

          
      
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
