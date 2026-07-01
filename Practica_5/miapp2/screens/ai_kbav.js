//==============================
// IMPORTACIONES
//==============================
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
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

//==============================
// COMPONENTE PRINCIPAL
//==============================
export default function ActivityIndicator_KeyboardAvoidingView() {

  const [n, setN] = useState('');
  const [c, setC] = useState('');
  const [p, setP] = useState('');
  const [l, setL] = useState(false);
  const [ok, setOk] = useState(false);
  const [e, setE] = useState('');
  const [out, setOut] = useState(false);

  const login = () => {
    if (!n || !c || !p) return setE('Completa campos');
    if (!c.includes('@')) return setE('Correo inválido');

    setE('');
    setL(true);

    setTimeout(() => {
      setL(false);
      setOk(true);
    }, 1200);
  };

  const logout = () => {
    setOut(true);

    setTimeout(() => {
      setOk(false);
      setN('');
      setC('');
      setP('');
      setE('');
      setOut(false);
    }, 1000);
  };

  if (ok) {
    return (
      <View style={styles.ok}>
        <Text style={styles.t}>Bienvenid@ {n}</Text>

        {out ? (
          <>
            <ActivityIndicator color="#002fa7" />
            <Text style={styles.azul}>Saliendo...</Text>
          </>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={logout}>
            <Text style={styles.btnt}>Cerrar sesión</Text>
          </TouchableOpacity>
        )}

        <StatusBar style="dark" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.c}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <Text style={styles.t}>Inicio de sesión</Text>

      <TextInput style={styles.i} placeholder="Nombre" value={n} onChangeText={setN} />
      <TextInput style={styles.i} placeholder="Correo" value={c} onChangeText={setC} />
      <TextInput style={styles.i} placeholder="Contraseña" value={p} onChangeText={setP} secureTextEntry />

      {!!e && <Text style={styles.azul}>{e}</Text>}

      {l ? (
        <ActivityIndicator size="large" color="#002fa7" />
      ) : (
        <TouchableOpacity style={styles.btn} onPress={login}>
          <Text style={styles.btnt}>Ingresar</Text>
        </TouchableOpacity>
      )}

      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
}

//==============================
// ESTILOS
//==============================
const styles = StyleSheet.create({

  c: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100
  },

  ok: {
    flex: 1,
    backgroundColor: '#FFE862',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100
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