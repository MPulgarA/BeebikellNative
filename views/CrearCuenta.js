import React from 'react';

import {StyleSheet} from 'react-native';
import {Container,Text, View, Item, H1, Form, Input, Button} from 'native-base';

import globalStyles from '../styles/global';

const CrearCuenta = () => {
    return ( 
        <>
            <Container style={globalStyles.contenedor}>
                <View style={globalStyles.contenido}>
                   <H1 style={globalStyles.subtitulo}>Crear una cuenta</H1> 
                   <Form>
                        <Item>
                            <Input
                                placeholder="Nombre"                                                          
                            />                            
                       </Item>
                       <Item  >
                            <Input
                                placeholder="Apellidos"                                                                                         
                            />                            
                       </Item>
                       <Item>
                            <Input
                                placeholder="Correo"   
                                autoCompleteType="email"                                                        
                            />                            
                       </Item>
                       <Item>
                            <Input
                                placeholder="Contraseña"                                
                                secureTextEntry={true}                                                              
                            />                            
                       </Item>
                   </Form>
                   <View style={{flexDirection: 'row'}}>
                    <Text>Registrarse</Text>
                    <Button
                            square
                            block
                            style={globalStyles.btnCrearC}                    
                    >
                        <Text style={{fontSize: 30}}>></Text>
                    </Button>
                   </View>
                   
                </View>
            </Container>
        </>
     );
}
 

export default CrearCuenta;