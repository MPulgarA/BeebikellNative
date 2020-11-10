import React, { useState } from 'react';

import {StyleSheet, View, Image} from 'react-native';
import {Container, Text, Button, H1, Input, Form, Item, Toast } from 'native-base'

import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {gql, useMutation} from '@apollo/client';


//Mutation
const AUTENTICAR_USUARIO = gql`
    mutation autenticarUsuario($input: AutenticarInput){
        autenticarUsuario(input: $input){
        token
        }
    }
`;


const Login = () => {

    //State de formulario 
    const [correo, guardarCorreo] = useState('');
    const [clave, guardarClave] = useState('');

    const [mensaje, guardarMensaje] = useState(null);

    const navigation = useNavigation();

    //Mutation Apollo
    const [autenticarUsuario] = useMutation(AUTENTICAR_USUARIO);


    //Autentificar usuario
    const handleSubmit = async () =>{
        if(correo === '' || clave === ''){
            //Error
            guardarMensaje('Todos los campos son obligatorios');
            return;
        }  
        try {
            const {data} = await autenticarUsuario({
                variables: {
                    input: {
                        correo,
                        clave
                    }
                }
            });

            const {token} = data.autenticarUsuario;

            //Guardar el token en el storage
            await AsyncStorage.setItem('token', token);

            //Ir a home
            navigation.navigate("Home");
                        
        } catch (error) {
            console.log(error)
            guardarMensaje(error.message.replace('GraphQl error:', ''));
        }
    }

     //Mostrar alerta
     const mostrarAlerta = () =>{
        Toast.show({
            text: mensaje,
            buttonText: 'OK',
            duration: 5000
        })
    }

    
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
                            onChangeText={texto=> guardarCorreo(texto)}
                        />
                    </Item>
                    
                    <Item inlineLabel last>
                        <Input
                            placeholder="Contraseña"
                            secureTextEntry={true}   
                            onChangeText={texto=> guardarClave(texto)}             
                        />
                    </Item>
                </Form>
                 
                <Button
                    square
                    block
                    style={[globalStyles.btnLog2,{marginTop: 100}]}
                    onPress={() => handleSubmit()}
                >
                    <Text style={{color:"white"}}>Iniciar Sesión</Text>
                </Button>

                {mensaje && mostrarAlerta()}    
                
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
});


export default Login;