import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Icon, Container, Button, Text, Toast, View, Card, CardItem, Body, Left, Thumbnail, Right, Row} from 'native-base';

import globalStyles from '../styles/global';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = () => {    
    
    const fechaActual = new Date ();

    

    const dias = [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",

      ];

      const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      
      const f = new Date();

      const diaActual = dias[f.getDay()];
      const mesActual = meses[f.getMonth()];
      const diaActualN = f.getDay();
      

    return ( 
        <>
            <Container style={globalStyles.contenedor}>
                              
                <View style={globalStyles.contenido}>

                    <Text style={styles.textFecha}>{`${diaActual} ${diaActualN}, ${mesActual}`}</Text>
                    <Text style={globalStyles.subtitulo}>Buenos Dias matias</Text>                
                    <Card
                        transparent   
                        style={styles.itemCard}                     
                    >
                        <CardItem >

                            <Left>
                                <Thumbnail source={require('../assets/img/dio.jpg')}/>                                                        
                                <Body>
                                    <Text style={styles.text}>Diego</Text>
                                    <Text style={styles.textSintomas}>No presenta sintomas</Text>                                                                       
                                </Body>
                                <Thumbnail 
                                    source={require('../assets/img/tverde.svg')}
                                    style={{width:30, height: 30}}
                                />   
                            </Left>

                        </CardItem>    

                        <CardItem >                    

                            <TouchableOpacity style={styles.child}>
                                <Text style={styles.textDatos}>110 Bpm</Text>
                                <Text style={styles.textCard}>Ritmo Cardiaco</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.child}>
                            <Text style={styles.textDatos}>98%SpO2</Text>
                                <Text style={styles.textCard}>Oxigeno en la sangre</Text>
                            </TouchableOpacity>

                        </CardItem>

                        <CardItem>                            

                            <TouchableOpacity style={styles.child}>
                            <Text style={styles.textDatos}>37c</Text>
                                <Text style={styles.textCard}>Temperatura Corporal</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.child}>
                                <Button
                                    style={[globalStyles.btnLog2]}
                                >
                                    <Text>GPS</Text>
                                </Button>
                                <Text style={styles.textCard}>Ubicacion</Text>
                            </TouchableOpacity>

                        </CardItem>
                       
                        
                        
                    </Card>

                   <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                       
                       <Button
                        style={[globalStyles.btnLog2,{marginTop: 100, width: 150}]}
                       >
                           <Text>Consejos</Text>
                       </Button>

                       <Button
                        style={[globalStyles.btnLog2,{marginTop: 100, width: 150}]}
                       >
                           <Text>Nueva Smartband</Text>
                       </Button>

                   </View>

                </View>               
            </Container> 
        </>
     );
}

const styles = StyleSheet.create({
    parent: {
        width: '100%', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    child: {
        width: '60%', 
        margin: '1%', 
        aspectRatio: 0.90,
    },
    itemCard:{
        borderRadius: 0   
    },
    text:{
        fontSize: 24,
        fontFamily:'Roboto-Bold',
    },
    textCard:{
        textAlign: 'center',
        fontSize: 24,
        fontFamily:'Roboto-Bold',        
    },
    textSintomas:{        
        fontSize: 18,
        fontFamily:'Roboto-Bold',
        color:'#66BB00'
    },
    textDatos:{
        fontSize: 36,
        fontFamily:'Roboto-Bold',
        color:'#FEB137',
        textAlign: 'center',
    },
    textFecha:{
        fontFamily:'Roboto-Bold',
        color:'#C1C1C1',
        fontSize: 16,
        paddingTop: 20,  
        bottom: -30
    },
    body:{
        flex:1
    },
    cardBody:{
        height: 200, 
        width: null, 
        flex: 1
    },
    mainContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
  },
  containerStyle: {
        padding: 10,
        backgroundColor: 'white',
        borderWidth:0,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor:'#808080',
        marginTop:50,
        elevation: 10
    }

});


 
export default Home;
