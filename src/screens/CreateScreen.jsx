import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";



export default function CreateScreen() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [textoNorma, setTextoNorma] = useState('');

    async function PublicarNorma() {
        try {
            const docRef = await addDoc(collection(db, "normas"), {
                Norma: textoNorma
            });
            console.log("Norma esrcita con ID: ", docRef.id)
            ModalNorma();
        }   catch (e) {
            console.error("Error al añadir la norma: ", e)
        }
    }

    const ModalNorma = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleTextChange = (texto) => {
        setTextoNorma(texto);
    };

    return (
        <View style={styles.container}>
            <View style={styles.contenedorBoton}>
                <TouchableOpacity style={styles.botonCircular} onPress={ModalNorma} >
                    <Text style={styles.textoBoton}>Crear Norma</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setIsModalVisible(false);
                }}
            >
                <View style={styles.modalCentrado}>
                    <View style={styles.modalContenido}>
                        <Text style={styles.modalTexto}>Crear Norma</Text>

                        <View style={styles.contenedorInput}>
                            <TextInput
                                style={styles.inputNorma}
                                placeholder="Escribe tu norma"
                                onChangeText={handleTextChange}
                                value={textoNorma}
                            />
                        </View>

                        <TouchableOpacity style={styles.botonSubirModal} onPress={PublicarNorma}>
                            <Text style={styles.textoBotonSubir}>Publicar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    contenedorBoton:{
        margin:10,
        //borderWidth:1,
        //borderColor: 'black',
    },
    botonCircular:{
        width: 80,
        height: 80,
        borderRadius:40,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBoton:{
        color:'white',
    },
    modalCentrado: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    },
    modalContenido: {
        backgroundColor: "white",
        width: '70%',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTexto: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
    },
    contenedorInput:{
        alignItems: 'center',
        width: '100%',
    },
    inputNorma: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: 'gray',
        width: '80%',
    },
    botonSubirModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "green",
    },
    textoBotonSubir: { 
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});