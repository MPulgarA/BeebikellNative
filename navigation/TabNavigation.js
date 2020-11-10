import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../views/Home';
import Configuracion from '../views/Configuracion';
import Perfil from '../views/Perfil';




const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return ( 
        <Tab.Navigator>
            <Tab.Screen name="Perfil" component={Perfil}/>
            <Tab.Screen name="Home" component={Home}/> 
            <Tab.Screen name="Configuracion" component={Configuracion}/>
        </Tab.Navigator>
     );
}
 
export default TabNavigator;