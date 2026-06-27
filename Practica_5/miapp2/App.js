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



















/*

-----------------------------------------------------------------
-----------------------------------------------------------------
 
Ejecutar un proyecto React Native

npx expo start --web


-----------------------------------------------------------------
-----------------------------------------------------------------
  
Limpia y reinicia Expo:     npx expo start -c 

Si la conexión al celular falla:    npx expo start --tunnel



-----------------------------------------------------------------  
-----------------------------------------------------------------
 
Crear un proyecto 

1. Entrar:     	            A la carpeta para guardar el proyecto
2. Escribir:   	            npx create-expo-app@latest repaso1 --template
3. Selecciona:              Blank
4. Elegir:                	For learning with Expo Go (SDK 54)
5. Cancelar:              	NO crear otro REPOSITORIO
6. Entrar: 	                cd repaso1
7. Instalar dependencias: 	npx expo install react-dom react-native-web
8. Ejecutar:                npx expo start --web


----------------------------------------------------------------- 
----------------------------------------------------------------- 

PLANTILLA BÁSICA DE UN .JS


*/

/*
Zona 1: Importaciones, componentes y archivos

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';


Zona 2: Main - Renderizado de componentes
export default function Modal_Bottom_Sheet() {
  return (
    <View style={styles.container}>

        <Text>Aquí va la práctica de Modal y Bottom Sheet</Text>


      <StatusBar style="auto" />
    

    </View>
  );  
  
}


Zona 3: Estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column-reverse',
  },


});


***poner los símbolos de los comentarios en cada "ZONA"


----------------------------------------------------------------- 
----------------------------------------------------------------- 

SÍMBOLOS


`   \




 */