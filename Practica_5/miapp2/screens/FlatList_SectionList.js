/*Zona 1: Importaciones, componentes y archivos*/

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';


/*Zona 2: Main - Renderizado de componentes */
export default function FlatList_SectionList() {
  return (
    <View style={styles.container}>

        <Text>Aquí va la práctica de FlatList y Section List</Text>


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



