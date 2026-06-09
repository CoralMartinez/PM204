/*Zona 1: Importaciones, componentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './components/Saludo.js';
import {Saludo2} from './components/Saludo2.js';
import {Perfil} from './components/Perfil.js';


/*Zona 2: Main - Renderizado de componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/wave.png')}/>

      <Text>¡Hola Mundo RN!</Text>
      <Text>----------------------------------------------</Text>

      <Saludo/>
      <Text>----------------------------------------------</Text>

      <Saludo2/>
      <Text>----------------------------------------------</Text>

      <Perfil/>
      

      <StatusBar style="auto" />
    

    </View>
  );  
  
}



/*Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

