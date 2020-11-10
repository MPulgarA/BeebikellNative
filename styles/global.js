import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    contenedor:{
        flex:1
    },
    contenido: {
        flexDirection: 'column',
        justifyContent: 'center', 
        marginHorizontal: '2.5%',
        flex: 1,
        
    },
    titulo:{
        textAlign: 'center',
        fontSize: 48,
        fontFamily:'Roboto-Bold',        
    },
    subtitulo:{        
        paddingTop: 20,                     
        fontSize: 48,
        fontFamily:'Roboto-Bold',
        textTransform: 'uppercase',
        justifyContent: 'flex-start',
    },
    btnLog:{
        backgroundColor: '#FFF',
        borderRadius: 20
    },
    btnLog2:{
        backgroundColor: '#FBBF00',
        borderRadius: 20
    },
    btnCrearC:{
        backgroundColor: '#FEB137',
        height: 60,
        width:60,
        borderRadius: 50,
        alignItems: 'center'        
    },  
    textoLogin:{
        color: '#FBBF00',
        fontFamily:'Roboto-Bold',  
    },
    textoLogin2:{
        color: 'black',
        fontFamily:'Roboto-Bold',  
    }
});
export default globalStyles;