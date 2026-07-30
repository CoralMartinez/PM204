import React, {useState} from 'react';

import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';

import {
    useLocalSearchParams,
    router
} from 'expo-router';



export default function EditarUsuarioScreen(){

    const { id, nombre, edad } = useLocalSearchParams();


    const [nuevoNombre,setNuevoNombre] = useState(
        nombre || ""
    );


    const [nuevaEdad,setNuevaEdad] = useState(
        edad || ""
    );



    const actualizarUsuario = async()=>{

        try{


            const respuesta = await fetch(

                `http://192.168.0.252:5000/v1/usuarios/${id}`,

                {

                    method:"PUT",

                    headers:{

                        "Content-Type":"application/json",

                        "Authorization":
                        "Basic " + btoa("admin:1234")

                    },


                    body:JSON.stringify({

                        nombre:nuevoNombre,

                        edad:Number(nuevaEdad)

                    })

                }

            );



            const datos = await respuesta.json();



            console.log(
                "Respuesta PUT:",
                datos
            );



            if(respuesta.ok){


                Alert.alert(

                    "Éxito",

                    "Usuario actualizado correctamente"

                );


                router.back();


            }


            else{


                Alert.alert(

                    "Error",

                    JSON.stringify(datos)

                );


            }


        }


        catch(error){


            console.log(

                "Error actualizar:",

                error

            );



            Alert.alert(

                "Error",

                "No fue posible actualizar"

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

                    Editar Usuario

                </Text>




                <TextInput

                    style={styles.input}

                    value={nuevoNombre}

                    onChangeText={setNuevoNombre}

                    placeholder="Nombre"

                />




                <TextInput

                    style={styles.input}

                    value={String(nuevaEdad)}

                    onChangeText={setNuevaEdad}

                    keyboardType="numeric"

                    placeholder="Edad"

                />




                <Pressable

                    style={styles.boton}

                    onPress={actualizarUsuario}

                >

                    <Text style={styles.textoBoton}>

                        Guardar cambios

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


    input:{


        height:50,

        borderWidth:1,

        borderColor:"#ccc",

        borderRadius:10,

        paddingHorizontal:15,

        marginBottom:20


    },


    boton:{


        backgroundColor:"green",

        padding:15,

        borderRadius:10,

        alignItems:"center"


    },


    textoBoton:{


        color:"white",

        fontWeight:"bold"


    }


});