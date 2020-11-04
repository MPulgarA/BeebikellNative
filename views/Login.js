import React, { Component } from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Container, Text, Button } from 'native-base'

import globalStyles from '../styles/global';


const Login = () => {
    return ( 
        <>
          <Container style={{backgroundColor: '#FBBB34'}}>
            <View style={globalStyles.contenido}>

                <View style={styles.con}>
                    <Image style={styles.img} source={require('../assets/img/logoBee.png')}/>
                </View>
                <Text style={globalStyles.titulo}>B e e b i k e l l</Text>  

                <Button
                    square
                    block
                    style={[globalStyles.btnLog,{marginTop: 100}]}
                >
                    <Text style={globalStyles.textoLogin}>Registrarse</Text>
                </Button>

                <Button
                    square
                    block
                    style={[globalStyles.btnLog,{marginTop: 20}]}
                >
                    <Text style={globalStyles.textoLogin2}>Inicar Sesion</Text>
                </Button>

            </View>              
          </Container>
        </>
     );
}
 
const styles = StyleSheet.create({
    con: {        
        alignItems: 'center'
    },
    img:{                        
        height: 300,
        width: 300,
        marginBottom: 10        
    },


});


export default Login;