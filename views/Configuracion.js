import React from 'react';

import {Container, Text, View} from 'native-base';

import globalStyles from '../styles/global';

const Configuracion = () => {
    return ( 
       <Container style={globalStyles.contenedor}>
            <View style={globalStyles.contenido}>
                <Text style={globalStyles.subtitulo}>Configuración</Text>
            </View>
        </Container>
     );
}
 
export default Configuracion;