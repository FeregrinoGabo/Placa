// Este código estado es para manejar las notificaiones en el tab

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useBadge } from '../context/BadgeContext';

export default function HomeScreen() {
  const { incrementarBadge, disminuirBadge } = useBadge();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
