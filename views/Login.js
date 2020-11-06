import React, { Component } from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Container, Text, Button, H1, Input, Form, Item, Toast } from 'native-base'

import globalStyles from '../styles/global';


const Login = () => {
    return ( 
        <>
          <Container>
            <View style={globalStyles.contenido}>

                <Text style={globalStyles.subtitulo}>Iniciar Sesión</Text> 


                <View style={styles.con}>
                    <Image style={styles.img} source={require('../assets/img/logoBee.png')}/>
                </View>

                <Form>
                    <Item inlineLabel last>
                        <Input
                            placeholder="Correo"                
                            autoCompleteType="email"
                        />
                    </Item>
                    
                    <Item inlineLabel last>
                        <Input
                            placeholder="Contraseña"
                            secureTextEntry={true}                
                        />
                    </Item>
                </Form>
                 
                <Button
                    square
                    block
                    style={[styles.btn,{marginTop: 100}]}
                >
                    <Text style={{color:"white"}}>Iniciar Sesión</Text>
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
        height: 100,
        width: 100,
        marginBottom: 10        
    },
    btn:{
        backgroundColor: '#FBBF00',
        borderRadius: 20
    },    

});


export default Login;