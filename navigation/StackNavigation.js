import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from "../views/Inicio"
import Login from "../views/Login"
import CrearCuenta from '../views/CrearCuenta';


import TabNavigator from './tabNavigation';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return ( 

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

          <Stack.Screen
            name="Home"
            component={TabNavigator} 
            options={{
              title:"Crear Cuenta",
              headerShown: false
            }}                    
          />
          
      
        </Stack.Navigator>        
      
     );
}



export default StackNavigator;