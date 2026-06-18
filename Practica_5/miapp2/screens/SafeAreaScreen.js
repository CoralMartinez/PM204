/*Zona 1: Importaciones, componentes y archivos*/
//import {StatusBar} from 'expo-status-bar';


import{SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {useState} from 'react';



/*Zona 2: Main - Renderizado de componentes */
export default function SafeAreaScreen() {
  return (

    <SafeAreaView styles={styles.safe}edges={['top','bottom']}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mis tareas</Text>
      </View>



    (mostrarMensaje &&(
      <View style={styles.mensaje}>
        <Text style={styles.mensajeTexto}>¡Bienvenido de nuevo!</Text>
        <TouchableOpacity onPress={()=>setMostrarMensaje(false)}>
          <Text style = {styles.mensajeCerrar}>x</Text>
        </TouchableOpacity>

      </View>
    ))  


      <ScrollView style={styles.scroll} contentContainerStyle={styles.listaContenido} showsVerticalScrollIndicator={false}>
        {['Comprar pan', 'Estudiar React Native', 'Aprender Importaciones', 'Llamar a alguien', 'Revisar el correo',
          'Leer un libro', 'Practicar Guitarra', 'Sacar a pasear al perro', 'Hacer la tarea'].map((tarea, i)=>(
            <View key={i} style={styles.tarjeta}>
              <Texto style={styles.tarjetaTexto}>{tarea}</Texto>
            
            </View>
        ))}
    
      </ScrollView>

    </SafeAreaView>

  );  
  
}

/*Zona 3: Estilos y posicionamiento */
const style = StyleSheet.create({

  safe:{
    flex:1,
    backgroundColor: '#fff',
    encabezado: {padding: 20, backgroundColor:'#111'},
    titulo:{color:'fff', fontSize:22, fontWeight:'700'},
  
  },

  mensaje:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: 14,
    backgroundColor: '#fff3cd',
    margin: 16,
    borderRadius: 8

  },

  mensajeTexto:{
    fontSize:14,
    color: '#664d03'

  },

  mensajeCerrar:{
    fontSize:16,
    fontWeight:'700',
    color:'#664d',
    paddingHorizontal:6

  },

  scroll:{
    flex:1
  },

  listContenido:{
    padding:16,
    paddingBottom:40
  },

  tarjeta:{
    backgroundColor:'#f4f4f4f4',
    borderRadius:10,
    padding:16,
    marginBottom:10
  },

  tarjetaTexto:{
    fontSize: 15,
    color:'#222'

  }


});

