import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, Image, ImageBackground, 
  TextInput, Pressable, FlatList, ActivityIndicator, Alert,
} from 'react-native';

export default function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() =>{

    const tiempo = setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);

    return () => clearTimeout(tiempo);

  },[]);


  const agregarLibro = () => {

    if(!titulo || !autor ||!genero){
      alert(
        "Error: Todos los campos son obligatorios"
      );

      return;
    }

    setGuardando(true);

    setTimeout(() =>{

      const nuevoLibro = {
        id: Date.now().toString(),
        titulo,
        autor,
        genero,
      };

      setLibros([...libros, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setGuardando(false);

      alert(
        "Éxito: Libro guardado correctamente"
      )

    }, 4000);

  };

  if(mostrarSplash){
    return(
      <View style={styles.splashContainer}>
        <Image 
          source={require('./assets/icono.jpg')}
          style={styles.icono}
        />

        <Text style={styles.nombreApp}>
          Registro de Libros
        </Text>
      </View>
    );
  }
  
  
  return (
    <ImageBackground
      source={require('./assets/fondo1.png')}
      style={styles.container}
      resizeMode="cover"
    >
      
        <Text style={styles.titulo}>
          Registro de Libros leídos
        </Text>

        <TextInput style={styles.input}
          placeholder="Título del libro"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput style={styles.input}
          placeholder="Autor del libro"
          value={autor}
          onChangeText={setAutor}
        />

        <TextInput style={styles.input}
          placeholder="Género del libro"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable 
          style={styles.boton}
          onPress={agregarLibro}>

          <Text style={styles.textoBoton}>
            Agregar libro
          </Text>
        </Pressable>


          {guardando && (
            <View style={styles.loadingBox}>
              <ActivityIndicator size="large" color="#fff" />
                <Text style={styles.loadingText}>
                  Guardando libro...
                </Text>
            </View>
)}

          <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            style={{width: '100%', marginTop:20}}
            renderItem={({ item }) => (
              <View style={styles.itemLibro}>
                <Text style={styles.textoLibro}>{item.titulo}</Text>
                <Text style={styles.textoSub}>{item.autor}</Text>
                <Text style={styles.textoSub}>{item.genero}</Text>
              </View>
            )}
          />
       
      </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    width: '100%',
    height: '100%',
    
  },

  splashContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  icono: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  
  nombreApp: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4e311c',
    marginTop: 20,
    marginBottom: 30,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#4e311c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  itemLibro: {
  backgroundColor: 'rgba(255,255,255,0.9)',
  padding: 15,
  borderRadius: 10,
  marginBottom: 10,
  width: '90%',
  },

  textoLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  textoSub: {
    fontSize: 14,
    color: '#333',
  },

  loadingBox: {
  marginTop: 15,
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: 15,
  borderRadius: 12,
  alignItems: 'center',
},

loadingText: {
  marginTop: 8,
  color: 'white',
  fontSize: 16,
  fontWeight: '600',
},

});
