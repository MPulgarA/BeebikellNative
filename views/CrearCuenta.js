import React from 'react';

import {StyleSheet} from 'react-native';
import {Container,Text, View, Item, H1, Form, Input, Button, Picker} from 'native-base';

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
                                placeholder="Correo"     
                                autoCompleteType="email"                                                       
                            />                            
                       </Item>
                       <Item  >
                            <Input
                                placeholder="Nombre"                                                                                         
                            />                            
                       </Item>
                       <Item>
                            <Input
                                placeholder="Apellido Paterno"   
                                                                                      
                            />                            
                       </Item>
                       <Item>
                            <Input
                                placeholder="Apellido Materno"                                
                                                                                          
                            />                            
                       </Item>
                       
                             
                        <Picker
                            mode="dropdown"
                        >
                            <Picker.Item label="Masculino" value="op1"/>
                            <Picker.Item label="Femenino" value="op2"/>
                        </Picker>


                       
                       <Item>
                            <Input
                                placeholder="Región"                                
                                                                                          
                            />                            
                       </Item>
                       <Item>
                            <Input
                                placeholder="Ciudad"                                
                                                                                          
                            />                            
                       </Item>
                       <Item>
                            <Input
                                placeholder="Contraseña"                                
                                secureTextEntry={true}                                                              
                            />                            
                       </Item>
                   </Form>
                   
                   <View>                    
                    <Button
                        square
                        block
                        style={[globalStyles.btnLog,{marginTop: 100},{backgroundColor:"#FBBF00"}]}
                    >
                    <Text style={{color:"white"}}>Iniciar Sesión</Text>
                     </Button>
                   </View>
                   
                </View>
            </Container>
        </>
     );
}
 

export default CrearCuenta;