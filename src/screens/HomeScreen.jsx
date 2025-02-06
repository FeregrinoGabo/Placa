// Este código estado es para manejar las notificaiones en el tab

import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useBadge } from '../context/BadgeContext';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../FirebaseConfig';

export default function HomeScreen() {
  const { incrementarBadge, disminuirBadge } = useBadge();
  const [normas, setNormas] = useState([]);

  async function obtenerNormas() {
    try{
      const querySnapchot = await getDocs(collection(db, 'normas'));
      const normasArray = [];
      querySnapchot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        normasArray.push({ id: doc.id, ...doc.data() });
      });
      setNormas(normasArray)
    } catch (e) {
      console.error("Error al llamar a las normas: ", e);
    }
    
  }

  useEffect(() => {
    obtenerNormas();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.botonesTemporales}>
        <Button
          title="Presióname"
          onPress={incrementarBadge}
          color="tomato"
        />
        
        <Button
          title="Descuento"
          onPress={disminuirBadge}
          color="tomato"
        />
      </View>

      <View style={styles.contenedorNormas}>
        <Text style={styles.tituloNormas}> Normas: </Text>
        <FlatList
          data={normas}
          renderItem={({item}) => (
            <View style={styles.normaContainer}>
              <Text> {item.Norma} </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  botonesTemporales:{
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorNormas: {
    marginTop: 20,
    width: '90%',
    height: '50%',

    //borderWidth: 1,
    //borderColor: 'black',
  },
  tituloNormas: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  normaContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
