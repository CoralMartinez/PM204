/* Zona 1: Importaciones */

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  View
} from 'react-native';


/* Zona 2: Main */

export default function ActivityIndicator_KeyboardAvoidingView() {

  /* estados de los TextInput */

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  /* estado del ActivityIndicator */

  const [cargando, setCargando] = useState(false);

  /* estado para mostrar mensaje */

  const [mensaje, setMensaje] = useState('');

  /* función del botón */

  const iniciarSesion = () => {

    if (
      nombre === '' ||
      correo === '' ||
      contrasena === ''
    ) {
      Alert.alert(
        'Campos vacíos',
        'Complete todos los campos'
      );
      return;
    }

    setMensaje('');
    setCargando(true);

    setTimeout(() => {

      setCargando(false);

      setMensaje(
        '✓ Datos válidos. Bienvenido(a) ' + nombre
      );

    }, 3000);

  };


  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : 'height'
      }
    >

      <Text style={styles.titulo}>
        ActivityIndicator y KeyboardAvoidingView
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={contrasena}
        onChangeText={setContrasena}
      />

      {
        cargando ? (

          <View style={styles.spinnerContainer}>

            <ActivityIndicator
              size="large"
              color="blue"
              animating={cargando}
            />

            <Text style={styles.textoCarga}>
              Validando información...
            </Text>

          </View>

        ) : (

          <TouchableOpacity
            style={styles.boton}
            onPress={iniciarSesion}
          >

            <Text style={styles.textoBoton}>
              Iniciar Sesión
            </Text>

          </TouchableOpacity>

        )
      }

      <Text style={styles.mensaje}>
        {mensaje}
      </Text>

      <StatusBar style="auto" />

    </KeyboardAvoidingView>

  );

}


/* Zona 3: Estilos */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 5
  },

  boton: {
    backgroundColor: '#2196F3',
    width: '90%',
    padding: 15,
    borderRadius: 8,
    marginTop: 20
  },

  textoBoton: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  spinnerContainer: {
    alignItems: 'center',
    marginTop: 20
  },

  textoCarga: {
    marginTop: 10,
    fontSize: 16
  },

  mensaje: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center'
  }

});