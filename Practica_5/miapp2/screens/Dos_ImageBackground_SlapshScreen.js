/*Zona 1: Importaciones, componentes y archivos*/

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';


/*Zona 2: Main - Renderizado de componentes */
export default function Dos_ImageBackground_SlapshScreen() {
  return (
    <View style={styles.container}>

        <Text>Aquí va la 2° práctica de ImageBackground y SlapshScreen</Text>


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



