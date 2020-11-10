import React from 'react';
import {View} from 'react-native';

import {Container, Text} from 'native-base';

import globalStyles from '../styles/global';

const Perfil = () => {
    return ( 
        <Container style={globalStyles.contenedor}>
            <View style={globalStyles.contenido}>
                <Text style={globalStyles.subtitulo}>Perfil</Text>
            </View>
        </Container>
     );
}
 
export default Perfil;