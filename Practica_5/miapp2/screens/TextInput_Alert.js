/*Zona 1: Importaciones, componentes y archivos*/

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TextInput, ScrollView, Alert, Platform, Button} from 'react-native';
import {useState} from 'react';


/*Zona 2: Main - Renderizado de componentes */
export default function TextInput_Alert() {
   const[nombre, setNombre] = useState('');
   const[email, setEmail] = useState('');
   const[pass, setPass] = useState('');
   const[numero, setNumero] = useState('');
   const[telefono, setTelefono] = useState('');
   const[busqueda, setBusqueda] = useState('');
   const[comentario, setComentario] = useState('');
   const[decimal, setDecimal] = useState('');

   const campos = [
    {label: 'Nombre', value: nombre},
    {label: 'Email', value: email},
    {label: 'Contraseña', value: pass ? 'Ingresada':'No ingresada'},
    {label: 'Edad', value: numero},
   ];

   const mostrarAlerta = (titulo, mensaje, botones) => {
    if(Platform.OS==='web'){
      
      window.alert(`${titulo}\n\n${mensaje}`);
      return;
    }
    Alert.alert(titulo, mensaje, botones);

   };

   //Alert 1 para botones de confirmar y cancelar

   const confirmarEnvio = () =>{
    mostrarAlerta(
      'ConfirmarEnvio',
      '¿Está seguro de confirmar el envío?',
      [
        {
          text: 'Cancelar',
          onPress: () => mostrarAlerta('Cancelado', 'No se envió nada'),
          style: 'cancel',

        },

        {
          text: 'Confirmar',
          onPress: () => mostrarAlerta('Enviado', 'Se ha enviado tu formulario')
        },
      ]
    );
   };

  //Alert 2 Confirmar que nombre no esté vacío

  const validarNombre = () =>{

    if(nombre === ''){
      mostrarAlerta('Campo vacío', 'Por favor, escribe tu nombre');
    }

    else{
      mostrarAlerta('Nombre guardado', `Hola ${nombre}, tu nombre fue guardado`);
      
    }
  };

  //Alert 3. Validar el correo

  const validarEmail = () => {
    if(email === ''){
      mostrarAlerta('Error', 'Campo email vacío');
    }

    else if(
      !email.includes('@')){
        mostrarAlerta('Error', 'Ingresa un email válido');
      }
    
    else{
      mostrarAlerta('Email válido','Tu correo electrónico es válido');
    }

  };

  return (

    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ejemplos de TextInput</Text>

      <Text style={styles.label}>Nombre</Text>

      <TextInput

        value = {nombre}
        onChangeText={setNombre}
        placeholder='Escribe aquí tu nombre'
        autoCapitalize='words'
        placeholderTextColor='#aaa'
        style={styles.input}

      />

      <Text style={styles.label}>Email</Text>

      <TextInput

        value = {email}
        onChangeText={setEmail}
        placeholder='correo@gmail.com'
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#aaa'
        style={styles.input}

      />

      <Text style={styles.label}>Contraseña</Text>

      <TextInput

        value = {pass}
        onChangeText={setPass}
        placeholder='*******'
        secureTextEntry={true}
        maxLength={20}
        placeholderTextColor='#aaa'
        style={styles.input}

      />

      <Text style={styles.label}>Edad</Text>

      <TextInput

        value = {numero}
        onChangeText={setNumero}
        placeholder='25'
        keyboardType='numeric'
        placeholderTextColor='#aaa'
        style={styles.input}

      />

      <Text style={styles.label}>Telefono</Text>

      <TextInput

        value = {telefono}
        onChangeText={setTelefono}
        placeholder='4420101010'
        keyboardType='phone-pad'
        placeholderTextColor='#aaa'
        style={styles.input}

      />

      <Text style={styles.label}>Busqueda</Text>

      <TextInput

        value = {busqueda}
        onChangeText={setBusqueda}
        placeholder='Buscar...'
        returnKeyType='search'
        placeholderTextColor='#aaa'
        style={styles.input}

      />

      <Text style={styles.label}>Precio</Text>

      <TextInput

        value = {decimal}
        onChangeText={setDecimal}
        placeholder='15.5'
        keyboardType='decimal-pad'
        placeholderTextColor='#aaa'
        style={styles.input}

      />

      <Text style={styles.label}>Comentario</Text>

      <TextInput

        value = {comentario}
        onChangeText={setComentario}
        placeholder='Escribe un comentario'
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        placeholderTextColor='#aaa'
        style={[styles.input, styles.multline]}

      />

      <View style={styles.botonesContainer}>
        <View style={styles.botonWrapper}>
          <Button title='Guardar nombre' onPress={validarNombre}/>
        </View>

        <View style={styles.botonWrapper}>
          <Button title='Validar email' onPress={validarEmail} color='#FF9500'/>
        </View>

        <View style={styles.botonWrapper}>
          <Button title='Enviar formulario' onPress={confirmarEnvio} color ='#34C759'/>

        </View>

      </View>


      {/* Recorre el array "campos" en vez de repetir <Text> manualmente */}
      <View style={styles.resumen}>
        <Text style={styles.resumenTitle}>Datos ingresados</Text>

        {campos.map((campo) =>(
          <Text key={campo.label} style={styles.resumenText}>
            {campo.label}: {campo.value || 'Sin datos'}
          </Text>

        ))}
      </View> 
 
    </ScrollView>
    
  );  
  
}

/*Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding:20
  },

  label: {
    fontSize:13,
    color: '#666',
    marginTop: 12
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom:20,
    color: '#222'
  },

  input: {
    borderWidth:1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding:12,
    fontSize: 15,
    marginBottom: 4
  },

  multiline:{
    height:90,
    textAlignVeertical: 'top'
  },

  botonesContainer:{
    margginTop: 20,
    gap:8
  },

  botonWrapper: {
    marginBottom:4,

  },
  resumen: { 
    marginTop: 24, 
    paddingTop: 16, 
    borderTopWidth: 1, 
    borderTopColor: '#ddd' 
  },

  resumenTitle: { 
    fontWeight: '600', 
    marginBottom: 6, 
    color: '#444' 
  },

  resumenText: { 
    fontSize: 14, 
    color: '#555' 
  }

});


