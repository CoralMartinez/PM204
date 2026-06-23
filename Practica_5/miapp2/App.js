/*Zona 1: Importaciones, componentes y archivos*/

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import MenuScreen from './screens/MenuScreen';

import {SafeAreaProvider} from 'react-native-safe-area-context';

/*Zona 2: Main - Renderizado de componentes */
export default function App() {
  return (
    <SafeAreaProvider>

      <View style={styles.container}>

      <MenuScreen/>

      <StatusBar style="auto" />
    
    </View>

    </SafeAreaProvider>
    
  );  
  
}


/*Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },


});