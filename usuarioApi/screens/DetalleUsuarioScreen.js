import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Alert,
    Platform,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import {
    useLocalSearchParams,
    router
} from 'expo-router';


export default function DetalleUsuarioScreen(){

    const { id, nombre, edad } = useLocalSearchParams();


    const editarUsuario = ()=>{

        router.push({

            pathname:"/editar",

            params:{
                id,
                nombre,
                edad
            }

        });

    };



    const eliminarUsuario = ()=>{

        const confirmarEliminar = async()=>{

            try{

                const respuesta = await fetch(

                    `http://192.168.0.252:5000/v1/usuarios/${id}`,

                    {

                        method:"DELETE",

                        headers:{

                            "Authorization":
                            "Basic " + btoa("admin:1234")

                        }

                    }

                );


                if(respuesta.ok){

                    Alert.alert(
                        "Éxito",
                        "Usuario eliminado correctamente"
                    );

                    router.back();

                }

            }

            catch(error){

                console.log(
                    "Error eliminar:",
                    error
                );

            }

        };



        if(Platform.OS==="web"){

            if(window.confirm(
                "¿Eliminar usuario?"
            )){

                confirmarEliminar();

            }

        }

        else{

            Alert.alert(

                "Eliminar usuario",

                "¿Estás seguro?",

                [

                    {
                        text:"Cancelar",
                        style:"cancel"
                    },

                    {
                        text:"Eliminar",
                        onPress:confirmarEliminar
                    }

                ]

            );

        }

    };



    return(

        <KeyboardAvoidingView
            style={{flex:1}}
            behavior={
                Platform.OS === "ios"
                ? "padding"
                : "height"
            }
        >

            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >


                <Text style={styles.titulo}>
                    Detalle del Usuario
                </Text>


                <Text style={styles.texto}>
                    ID: {id}
                </Text>


                <Text style={styles.texto}>
                    Nombre: {nombre}
                </Text>


                <Text style={styles.texto}>
                    Edad: {edad}
                </Text>



                <Pressable
                    style={styles.botonEditar}
                    onPress={editarUsuario}
                >

                    <Text style={styles.textoBoton}>
                        Editar
                    </Text>

                </Pressable>



                <Pressable
                    style={styles.botonEliminar}
                    onPress={eliminarUsuario}
                >

                    <Text style={styles.textoBoton}>
                        Eliminar
                    </Text>

                </Pressable>



            </ScrollView>


        </KeyboardAvoidingView>

    );

}



const styles = StyleSheet.create({

    container:{

        flexGrow:1,

        justifyContent:"center",

        padding:20

    },


    titulo:{

        fontSize:28,

        fontWeight:"bold",

        marginBottom:30

    },


    texto:{

        fontSize:20,

        marginBottom:15

    },


    botonEditar:{

        backgroundColor:"green",

        padding:15,

        borderRadius:10,

        alignItems:"center",

        marginTop:20

    },


    botonEliminar:{

        backgroundColor:"red",

        padding:15,

        borderRadius:10,

        alignItems:"center",

        marginTop:15

    },


    textoBoton:{

        color:"white",

        fontWeight:"bold"

    }


});