/*Zona 1: Importaciones, componentes y archivos*/

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';


/*Zona 2: Main - Renderizado de componentes */
export default function Pressable_Switch() {
  return (
    <View style={styles.container}>

        <Text>Aquí va la práctica de Pressable y Switch</Text>


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
    justifyContent: 'center',
    flexDirection:'column-reverse',
  },


});



