/*Zona 1: Importaciones, componentes y archivos*/

import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';


/*Zona 2: Main - Renderizado de componentes */
export default function Uno_ImageBackground_SlapshScreen() {

  const {imagenindex, setImagen}= useState(0);
  const {blur, setblur} = useState(0);

  const imagenes = [
    requiere('..assets/icon.png'),
    require('..assets/UPQ-Logo.png'),
    require('..assets/image.png'),
  ];

  return (
    <ImageBackground source={imagenes[imagenindex]} 
      style={styles.contenedor} 
      imageStyle={styles.imagen}
      blurRadius={blur}
    />

    
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



