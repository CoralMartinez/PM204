//=====================================================
// IMPORTACIONES
//=====================================================

// Compañera:
// Importamos React y useState.
// useState nos permite crear estados para guardar información.

import React, { useState } from 'react';

// Compañera:
// StatusBar cambia la apariencia de la barra superior del dispositivo.

import { StatusBar } from 'expo-status-bar';

// Coral:
// ActivityIndicator será el componente que explicaré.

// Compañera:
// KeyboardAvoidingView evita que el teclado cubra los TextInput.
// Platform detecta si la aplicación corre en Android o iOS.

// Ambas:
// Los demás componentes construyen la interfaz de la aplicación.

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image
} from 'react-native';


//=====================================================
// COMPONENTE PRINCIPAL
//=====================================================

// Coral:
// Aquí comienza nuestra aplicación.

export default function LoginPantalla() {

  // Coral:
  // Guardamos el color azul principal para reutilizarlo.

  const AZUL = '#021a57';


  //=====================================================
  // ESTADOS
  //=====================================================

  // Coral:
  // Guarda el nombre que escribe el usuario.

  const [nombre, setNombre] = useState('');

  // Coral:
  // Guarda el correo.

  const [correo, setCorreo] = useState('');

  // Coral:
  // Guarda la contraseña.

  const [contrasena, setContrasena] = useState('');

  // Coral:
  // Guarda la confirmación de la contraseña.

  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  // Coral:
  // Controla cuándo mostrar el ActivityIndicator.

  const [cargando, setCargando] = useState(false);

  // Coral:
  // Indica si el usuario inició sesión.

  const [logueado, setLogueado] = useState(false);

  // Coral:
  // Guarda los mensajes de error.

  const [error, setError] = useState('');

  // Coral:
  // Controla el spinner al cerrar sesión.

  const [saliendo, setSaliendo] = useState(false);

  //=====================================================
  // LOGIN
  //=====================================================

  // Coral:
  // Esta función se ejecuta cuando el usuario
  // presiona el botón "Ingresar".

  const iniciarSesion = () => {

    // Coral:
    // Verificamos que todos los campos estén completos.

    if (!nombre || !correo || !contrasena || !confirmarContrasena)
      return setError('Completa campos');

    // Coral:
    // Comprobamos que el correo tenga el símbolo @.

    if (!correo.includes('@'))
      return setError('Correo inválido');

    // Coral:
    // Verificamos que ambas contraseñas sean iguales.

    if (contrasena !== confirmarContrasena)
      return setError('Las contraseñas no coinciden');

    // Coral:
    // Si todo es correcto, eliminamos cualquier error.

    setError('');

    // Coral:
    // Activamos el ActivityIndicator.

    setCargando(true);

    // Coral:
    // Simulamos el tiempo que tardaría un servidor
    // en responder al iniciar sesión.

    setTimeout(() => {

      // Coral:
      // Ocultamos el ActivityIndicator.

      setCargando(false);

      // Coral:
      // Cambiamos a la pantalla de bienvenida.

      setLogueado(true);

    }, 1200);
  };


  //=====================================================
  // LOGOUT
  //=====================================================

  // Coral:
  // Esta función se ejecuta al presionar
  // el botón "Cerrar sesión".

  const cerrarSesion = () => {

    // Coral:
    // Mostramos el ActivityIndicator mientras
    // se procesa el cierre de sesión.

    setSaliendo(true);

    // Coral:
    // Simulamos nuevamente el tiempo
    // de respuesta del servidor.

    setTimeout(() => {

      // Coral:
      // Regresamos a la pantalla del formulario.

      setLogueado(false);

      // Coral:
      // Limpiamos todos los TextInput.

      setNombre('');
      setCorreo('');
      setContrasena('');
      setConfirmarContrasena('');

      // Coral:
      // También eliminamos cualquier mensaje de error.

      setError('');

      // Coral:
      // Ocultamos el ActivityIndicator.

      setSaliendo(false);

    }, 1000);
  };

  //=====================================================
  // PANTALLA DE BIENVENIDA
  //=====================================================

  // Compañera:
  // Si el usuario inició sesión correctamente,
  // mostramos esta pantalla.

  if (logueado) {
    return (

      <View style={[styles.pantallaLogueado, { backgroundColor: AZUL }]}>

        // Compañera:
        // Mostramos un mensaje de bienvenida con el nombre del usuario.

        <Text style={styles.titulo}>
          Bienvenid@ {nombre}
        </Text>

        {
          // Coral:
          // Si el usuario está cerrando sesión,
          // mostramos el ActivityIndicator.

          saliendo ? (

            <>
              <ActivityIndicator
                size="large"
                color="#fff"
              />

              <Text style={styles.textoSalida}>
                Saliendo...
              </Text>
            </>

          ) : (

            // Compañera:
            // Si no está saliendo,
            // mostramos el botón para cerrar sesión.

            <TouchableOpacity
              style={styles.botonCerrarSesion}
              onPress={cerrarSesion}
            >

              <Text style={styles.textoBoton}>
                Cerrar sesión
              </Text>

            </TouchableOpacity>

          )
        }

        // Compañera:
        // Cambiamos el color de la barra de estado.

        <StatusBar style="light" />

      </View>

    );
  }


  //=====================================================
  // FORMULARIO
  //=====================================================

  return (

    // Compañera:
    // KeyboardAvoidingView mueve el contenido
    // cuando aparece el teclado.
    // Así evita que los TextInput queden ocultos.

    <KeyboardAvoidingView

      style={styles.contenedor}

      // Compañera:
      // Platform detecta el sistema operativo.
      // En iOS usa "padding" y en Android "height".

      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : 'height'
      }

    >

      // Compañera:
      // ScrollView permite desplazar el contenido
      // cuando ya no cabe en la pantalla.

      <ScrollView
        contentContainerStyle={styles.scrollContenido}
      >

        // Compañera:
        // Imagen decorativa del formulario.

        <Image
          source={require('../assets/fondo2.png')}
          style={styles.imagen}
        />

        // Compañera:
        // Título principal del formulario.

        <Text
          style={[styles.titulo, { color: AZUL }]}
        >
          Inicio de sesión
        </Text>
        // Compañera:
        // Primer TextInput.
        // Captura el nombre del usuario.

        <TextInput
          style={[styles.campoTexto, { borderColor: AZUL, color: AZUL }]}
          placeholder="Nombre"
          placeholderTextColor="#666"
          value={nombre}
          onChangeText={setNombre}
        />

        // Compañera:
        // Segundo TextInput.
        // Captura el correo electrónico.

        <TextInput
          style={[styles.campoTexto, { borderColor: AZUL, color: AZUL }]}
          placeholder="Correo"
          placeholderTextColor="#666"
          value={correo}
          onChangeText={setCorreo}
        />

        // Compañera:
        // Tercer TextInput.
        // secureTextEntry oculta los caracteres.

        <TextInput
          style={[styles.campoTexto, { borderColor: AZUL, color: AZUL }]}
          placeholder="Contraseña"
          placeholderTextColor="#666"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry
        />

        // Compañera:
        // Campo para confirmar la contraseña.

        <TextInput
          style={[styles.campoTexto, { borderColor: AZUL, color: AZUL }]}
          placeholder="Confirmar contraseña"
          placeholderTextColor="#666"
          value={confirmarContrasena}
          onChangeText={setConfirmarContrasena}
          secureTextEntry
        />

        // Coral:
        // Si existe un mensaje de error,
        // lo mostramos debajo de los campos.

        {!!error && (

          <Text
            style={[styles.textoError, { color: AZUL }]}
          >
            {error}
          </Text>

        )}

        // Coral:
        // Si cargando es true,
        // mostramos el ActivityIndicator.

        {cargando ? (

          <ActivityIndicator
            size="large"
            color={AZUL}
          />

        ) : (

          // Coral:
          // Cuando termina la carga,
          // aparece el botón Ingresar.

          <TouchableOpacity

            style={[
              styles.botonIngresar,
              { backgroundColor: AZUL }
            ]}

            onPress={iniciarSesion}

          >

            <Text style={styles.textoBoton}>
              Ingresar
            </Text>

          </TouchableOpacity>

        )}

        // Compañera:
        // Espacio inferior para facilitar
        // el desplazamiento del formulario.

        <View style={{ height: 120 }} />

      </ScrollView>

      // Coral:
      // Barra de estado del formulario.

      <StatusBar style="dark" />

    </KeyboardAvoidingView>

  );

}

//=====================================================
// ESTILOS
//=====================================================

// Compañera:
// Aquí definimos la apariencia de todos
// los componentes de la aplicación.

const styles = StyleSheet.create({

  // Pantalla principal del formulario.
  contenedor: {
    flex: 1,
    backgroundColor: '#fff'
  },

  // Contenedor del ScrollView.
  // Centra todo el contenido.
  scrollContenido: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40
  },

  // Pantalla que aparece
  // después de iniciar sesión.
  pantallaLogueado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Título principal.
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff'
  },

  // Estilo de los TextInput.
  campoTexto: {
    width: '85%',
    borderWidth: 1,
    marginVertical: 6,
    padding: 12,
    fontSize: 18
  },

  // Botón Ingresar.
  botonIngresar: {
    padding: 14,
    marginTop: 15,
    borderRadius: 8
  },

  // Botón Cerrar sesión.
  botonCerrarSesion: {
    padding: 14,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: '#ac0707'
  },

  // Texto de los botones.
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },

  // Mensajes de validación.
  textoError: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  },

  // Texto mostrado al cerrar sesión.
  textoSalida: {
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18
  },

  // Imagen del formulario.
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10
  }

});