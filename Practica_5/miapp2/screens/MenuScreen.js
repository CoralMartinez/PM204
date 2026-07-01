/*Zona 1: Importaciones, componentes y archivos*/

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import Pressable from './Pressable_Switch';
import TextInput from './TextInput_Alert'
import FlatList from './FlatList_SectionList';
import Image_1 from './Uno_ImageBackground_SplashScreen';
import Image_2 from './Dos_ImageBackground_SplashScreen';
import Activity from './ActivityIndicator_KeyboardAvoidingView'
import Modal from './Modal_Bottom_Sheet'


/*Zona 2: Main - Renderizado de componentes */
export default function MenuScreen() {

    const[screen,setScreen]=useState('menu');

    switch(screen){

        case 'tarjetas':
            return <TarjetasScreen/>

        case 'safeArea':
            return <SafeAreaScreen/>

        case 'pressable':
            return <Pressable/>

        case 'textinput':
            return <TextInput/>

        case 'flatlist':
            return <FlatList/>
        
        case 'imagebackground_1':
            return <Image_1/>
        
        case 'imagebackground_2':
            return <Image_2/>
        
        case 'activityindicator':
            return <Activity/>
        
        case 'modal':
            return <Modal/>


        case 'menu':
            default:
                return (

                    <View style={styles.container}>
                        
                        <View style={styles.boton}>
                        <Button title='Práctica tarjetas' onPress={()=>setScreen('tarjetas')}/>
                        </View>
                        
                        <View style={styles.boton}>
                        <Button title='Práctica SafeArea y ScrollView' onPress={()=>setScreen('safeArea') }/>
                        </View>

                        <View style={styles.boton}>
                        <Button title='Práctica Pressable y Switch' onPress={()=>setScreen('pressable') }/>
                        </View>

                        <View style={styles.boton}>
                        <Button title='Práctica TextInput y Alert' onPress={()=>setScreen('textinput') }/>
                        </View>

                        <View style={styles.boton}>
                        <Button title='Práctica FlatList y Section List' onPress={()=>setScreen('flatlist') }/>
                        </View>

                        <View style={styles.boton}>
                        <Button title='Práctica 1 ImageBackground y SplashScreen' onPress={()=>setScreen('imagebackground_1') }/>
                        </View>

                        <View style={styles.boton}>
                        <Button title='Práctica 2 ImageBackground y SplashScreen' onPress={()=>setScreen('imagebackground_2') }/>
                        </View>

                        <View style={styles.boton}>
                        <Button title='Práctica ActivityIndicator y KeyboardAvoidingView' onPress={()=>setScreen('activityindicator') }/>
                        </View>

                        <View style={styles.boton}>
                        <Button title='Práctica Modal y Botton sheet' onPress={()=>setScreen('modal') }/>
                        </View>
                        
                        <StatusBar style="auto" />
                    </View>
                    
                    
                );  
  
    }

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
    width: '25%',
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden', //  borde redondeado
    elevation: 4, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },


  

});