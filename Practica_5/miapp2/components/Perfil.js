
//Perfil Usuario Desestructuración
import {Text, View, Button, StyleSheet} from "react-native";
import React, {useState} from 'react';

export const Perfil= ({nombre, carrera, materia, cuatrimestre, style})=> {

    const [mostrar, setMostrar]= useState(false);

    return(
    
    <View style={[styles.tarjeta, style]}>
        
        <Text style={styles.nombre}> {nombre} </Text>


        {mostrar && 
        <>
        <Text style={styles.carrera}> {carrera} </Text>
        <Text style={styles.otroTexto}> {materia} </Text>
        <Text style={styles.otroTexto}> {cuatrimestre} </Text>
        </>
        }

        <Button title="Ver Perfil" onPress={()=> setMostrar(!mostrar)}/>
        
    </View>
    );

} 

const styles=StyleSheet.create({

    nombre:{
        fontSize:24,
        fontWeight: 900,
        textTransform:'uppercase',

    },

    tarjeta:{
        borderWidth: 2, 
        padding: 25,
        margin: 10,

    },

    carrera:{
        fontSize: 18,
        color:'blue',
        fontFamily: 'Roboto',
    },

    otroTexto:{
        fontSize: 12,
        fontFamily: 'Courier',
        fontStyle:'italic',
    },

});
















