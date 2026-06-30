//COMENTADO

//=====================================================
// IMPORTACIONES
//=====================================================

// Coral: Importamos React y useState para crear estados.
import React, { useState } from 'react';

// Coral: Barra de estado del dispositivo.
import { StatusBar } from 'expo-status-bar';

// Coral:
// ActivityIndicator será el componente que explicaré.
// Compañera:
// KeyboardAvoidingView lo explicaré yo.
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';


//=====================================================
// COMPONENTE PRINCIPAL
//=====================================================

// Coral: Aquí comienza nuestra aplicación.
export default function ActivityIndicator_KeyboardAvoidingView() {

  // Coral: Estados para guardar los datos del formulario.
  const [n, setN] = useState('');
  const [c, setC] = useState('');
  const [p, setP] = useState('');

  // Coral: Controla si aparece el ActivityIndicator.
  const [l, setL] = useState(false);

  // Coral: Indica si el usuario inició sesión.
  const [ok, setOk] = useState(false);

  // Coral: Guarda mensajes de error.
  const [e, setE] = useState('');

  // Coral: Controla el ActivityIndicator al cerrar sesión.
  const [out, setOut] = useState(false);

  // ❌ Aún NO ejecutamos.
  // Todavía no existe una interfaz.


  //=====================================================
  // LOGIN/INICIO DE SESIÓN
  //=====================================================

  // Coral: Se ejecuta al presionar "Ingresar".
  const login = () => {

    // Coral: Validamos que los campos no estén vacíos.
    if (!n || !c || !p) return setE('Completa campos');

    // Coral: Validamos el correo.
    if (!c.includes('@')) return setE('Correo inválido');

    // Coral: Limpiamos errores.
    setE('');

    // Coral:
    // Cambiamos el estado a true para mostrar
    // el ActivityIndicator.
    setL(true);

    // Coral: Simulamos una petición al servidor.
    setTimeout(() => {

      // Coral: Ocultamos el ActivityIndicator.
      setL(false);

      // Coral: Mostramos la pantalla de bienvenida.
      setOk(true);

    }, 1200);
  };


  //=====================================================
  // LOGOUT/CIERRE DE SESIÓN
  //=====================================================

  // Coral: Se ejecuta al cerrar sesión.
  const logout = () => {

    // Coral: Activa el ActivityIndicator.
    setOut(true);

    setTimeout(() => {

      // Coral: Regresamos al login.
      setOk(false);

      // Coral: Limpiamos los campos.
      setN('');
      setC('');
      setP('');

      setE('');

      // Coral: Ocultamos el ActivityIndicator.
      setOut(false);

    }, 1000);
  };


  //=====================================================
  // PANTALLA DE BIENVENIDA
  //=====================================================

  if (ok)
    return (

      <View style={styles.ok}>

        {/* Coral: Mostramos el nombre del usuario. */}
        <Text style={styles.t}>
          Bienvenid@ {n}
        </Text>

        {out ? (

          <>
            {/* Coral:
                ActivityIndicator mientras
                se cierra la sesión. LUEGO UN BOTÓN PARA Botón para cerrar sesión.
            */}
            <ActivityIndicator color="#002fa7" />

            <Text style={styles.azul}>
              Saliendo...
            </Text>
          </>

        ) : (

        
          <TouchableOpacity
            style={styles.btn}
            onPress={logout}
          >

            <Text style={styles.btnt}>
              Cerrar sesión
            </Text>

          </TouchableOpacity>

        )}

        <StatusBar style="dark" />

      </View>

    );


  //=====================================================
  // FORMULARIO
  //=====================================================

  return (

    // Compañera:
    // KeyboardAvoidingView evita que el teclado
    // cubra los TextInput.
    <KeyboardAvoidingView
      style={styles.c}
      behavior={Platform.OS === 'ios'
        ? 'padding'
        : 'height'}
    >

      <Text style={styles.t}>
        Inicio de sesión
      </Text>

      {/* Coral: Capturamos el nombre. */}
      <TextInput
        style={styles.i}
        placeholder="Nombre"
        placeholderTextColor="#666"
        value={n}
        onChangeText={setN}
      />

      {/* Coral: Capturamos el correo. */}
      <TextInput
        style={styles.i}
        placeholder="Correo"
        placeholderTextColor="#666"
        value={c}
        onChangeText={setC}
      />

      {/* Coral: Capturamos la contraseña. */}
      <TextInput
        style={styles.i}
        placeholder="Contraseña"
        placeholderTextColor="#666"
        value={p}
        onChangeText={setP}
        secureTextEntry
      />

      {/* Coral: Mostramos errores si existen. */}
      {!!e &&
        <Text style={styles.azul}>
          {e}
        </Text>
      }

      {l ? (

        <>
          {/* Coral:
              ActivityIndicator en funcionamiento.
              Props utilizadas:
              size
              color
          */}
          <ActivityIndicator
            size="large"
            color="#002fa7"
            animating={l}
          />

          <Text style={styles.azul}>
            Validando información...
          </Text>

        </>

      ) : (

        // Coral: Botón para iniciar sesión.
        <TouchableOpacity
          style={styles.btn}
          onPress={login}
        >

          <Text style={styles.btnt}>
            Ingresar
          </Text>

        </TouchableOpacity>

      )}

      <StatusBar style="dark" />

    </KeyboardAvoidingView>

  );

}


//=====================================================
// ESTILOS
//=====================================================

// Compañera:
// Aquí definimos la apariencia de la aplicación.
const styles = StyleSheet.create({

  c: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ok: {
    flex: 1,
    backgroundColor: '#FFE862',
    justifyContent: 'center',
    alignItems: 'center'
  },

  t: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#002fa7',
    marginBottom: 20
  },

  i: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#002fa7',
    marginVertical: 6,
    padding: 12,
    fontSize: 18,
    color: '#002fa7'
  },

  btn: {
    backgroundColor: '#002fa7',
    padding: 14,
    marginTop: 15,
    borderRadius: 8
  },

  btnt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },

  azul: {
    color: '#002fa7',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18
  }

});