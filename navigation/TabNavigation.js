import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../views/Home';
import Configuracion from '../views/Configuracion';
import Perfil from '../views/Perfil';

import Icon from 'react-native-vector-icons/FontAwesome';




const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return ( 
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({color, size }) => {
                let nombreIcono;
    
                if (route.name === 'Home') {
                    nombreIcono = 'home'                
                } else if (route.name === 'Configuracion') {
                    nombreIcono = 'cog'                
                } else if (route.name === 'Perfil'){
                    //Aqui debe ir la imagen de Perfil del Usuario
                    nombreIcono = 'user'
                }
    
                // You can return any component that you like here!
                return <Icon name={nombreIcono} size={size} color={color} />;
                },
            })}   
            
            tabBarOptions = {{
                activeTintColor: '#FEB137',     
                showLabel: false, 
                tabStyle:{
                    backgroundColor:'#F0F0F0',                    
                }          
            }}
        >
            <Tab.Screen name="Perfil" component={Perfil}/>
            <Tab.Screen name="Home" component={Home}/> 
            <Tab.Screen name="Configuracion" component={Configuracion}/>
        </Tab.Navigator>
     );
}
 
export default TabNavigator;