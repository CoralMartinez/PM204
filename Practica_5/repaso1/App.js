//Zona 1: Importaciones, componentes y archivos

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Registro_Evento from './screens/Registro_Evento'


//Zona 2: Main --> Renderizado de componentes

export default function App() {
  return <Registro_Evento/>;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
