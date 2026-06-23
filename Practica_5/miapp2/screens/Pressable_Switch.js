/*Zona 1: Importaciones, componentes y archivos*/

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Pressable, Switch} from 'react-native';
import {useState} from 'react';

/*Zona 2: Main - Renderizado de componentes */
export default function Pressable_Switch() {
  const[contador, setContador] = useState(0);
  const[isDark, setIsDark] = useState(false);
  const tema = {
    fondo: isDark ? '#1a1a2e':'#eef2ff',
    texto: isDark ? '#e2e8f0':'#1e293b',
    tarjeta: isDark ? '#16213e': '#ffffff'
  }
  
  return (
    <View style={[styles.container, {backgroundColor: tema.fondo}]}>

      <Text>Práctica de Pressable y Switch</Text>
      <Text style={[styles.contador, {color: tema.texto}]}>
        Presiones: {contador}</Text>
      <Text style={{color: tema.texto, fontSize:16}}>
        {isDark ? 'Modo Oscuro':'Modo Claro'}
      </Text>

      <Switch value ={isDark} onValueChange={(value) => setIsDark(value)}
        trackColor={{false: '#cbd5e1', true: '#6366f1'}}
        thumbColor={isDark ? '#ffffff':'#f1f5f9'}
      />

        <Pressable style={({pressed})=>[
           styles.boton,
           pressed && styles.botonPresionado,
           contador>=5 && styles.botonDesactivado
          
          ]} 
        
           onPress={()=> setContador(contador + 1)}
           onPressIn={()=> console.log('Empezaste a presionar')}
           onPressOut={()=> console.log('Soltaste el botón')}
           onLongPress={()=> console.log('Presión larga detectada')}
           delayLongPress={1000}
           disabled = {contador>=5}
           hitSlop={10}
           android_ripple={{color:'green'}}
        >

         <Text style={styles.textoBoton}>{contador >= 5 ? 
         'Boton desactivado':'Aumentar contador'}
         </Text>
        </Pressable>
    
      <StatusBar style={isDark ? 'light':'dark'} />

    </View>
  );  
  
}

/*Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },

  boton: {
    backgroundColor: '#2563eb',
    paddingVertical :14,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  textoBoton:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  botonPresionado: {
    backgroundColor: 'cyan',
    transform: [{scale:0.96}]
  },
  
  contador: {
    fontSize: 20,
    marginBottom: 20,
  },

  botonDesactivado: {
    backgroundColor: 'pink'
  }

});



