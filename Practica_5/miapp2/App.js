/*Zona 1: Importaciones, componentes y archivos*/

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Saludo} from './components/Saludo.js';
import {Saludo2} from './components/Saludo2.js';
import {Perfil} from './components/Perfil.js';


/*Zona 2: Main - Renderizado de componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil style={styles.tarjetaVerde} nombre="Jacks" carrera="ISC" materia="Programación Móvil" cuatrimestre="9° Noveno"/>
     
      <Perfil 
      style={styles.tarjetaRoja}
      nombre="Evangeline" 
      carrera="ISC" 
      materia="Programación Móvil" 
      cuatrimestre="6° Noveno"
      />

      <Perfil style={styles.tarjetaVerde} nombre="Apollo" carrera="ISC" materia="Programación Móvil" cuatrimestre="9° Noveno"/>
     

      <StatusBar style="auto" />
    

    </View>
  );  
  
}


/*Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'row',
  },
  
  
  tarjetaVerde:{
        backgroundColor:'#04f257',
      
    },

    tarjetaRoja:{
        backgroundColor:'#ff6262',
        
    },
    

});


