//Zona 1. Importaciones, componentes y archivos

import React, { useState } from 'react';

import {SafeAreaView, ScrollView, View, Text, TextInput, Switch, Pressable, Alert, StyleSheet, Platform} from 'react-native';

//Zona 2. Main y renderizado de componentes

export default function Registro_Evento(){

    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');

    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const enviarRegistro=()=>{

       if(nombre === '' || carrera === '' || semestre === ''){
            mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos');
            return;
        }

        if(isNaN(semestre)){
            mostrarAlerta('Error', 'El semestre debe ser un número');
            return;
        }

        mostrarAlerta('Registro enviado', `Nombre: ${nombre} 
            Carrera: ${carrera} 
            Semestre: ${semestre} 
            Taller: ${taller ? 'Sí':'No'}
            Constancia: ${constancia ? 'Sí':'No'}
            Deporte: ${deportes ? 'Sí':'No'}`
        );

    }

    const mostrarAlerta = (titulo, mensaje) => {
        if (Platform.OS === 'web') {
        window.alert(`${titulo}\n\n${mensaje}`);
        return;
    }

    Alert.alert(titulo, mensaje);

};

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>

                     <Text style={styles.titulo}>Registro de Evento Universitario</Text>
                    <TextInput style={styles.input} placeholder='Nombre completo'
                    value={nombre} onChangeText={setNombre}/>

                    <TextInput style={styles.input} placeholder='Carrera'
                    value={carrera} onChangeText={setCarrera}/>

                    <TextInput style={styles.input} placeholder='Semestre'
                    keyboardType="numeric"
                    value={semestre} onChangeText={setSemestre}/>

                    <Text style={styles.subtitulo}>Opciones</Text>

                    <View style={styles.fila}>
                        <Text>¿Asistirá al taller?</Text>
                        <Switch value={taller} onValueChange={setTaller}/>
                    </View>

                    <View style={styles.fila}>
                        <Text>¿Requiere constancia?</Text>
                        <Switch value={constancia} onValueChange={setConstancia}/>
                    </View>

                    <View style={styles.fila}>
                        <Text>Participará en actividades deportivas?</Text>
                        <Switch value={deportes} onValueChange={setDeportes}/>
                    </View>

                    <Pressable style={styles.boton} onPress={enviarRegistro} >
                        <Text style={styles.textoBoton}>Enviar Registro</Text> 
                    </Pressable>
          
                </ScrollView>
            </SafeAreaView>
        );

    }




//Zona 3. Estilos

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: 20
    },

    subtitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20
    },
    
    input: {
        borderWidth: 1,
        color: 'black',
        borderColor: '#ccc',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 12,
        borderRadius: 8
    },
    
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },

    boton: {
        backgroundColor: '#007BFF',
        margin: 20,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },

    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }

});


