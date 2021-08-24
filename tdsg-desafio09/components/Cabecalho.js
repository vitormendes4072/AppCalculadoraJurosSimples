import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function Cabecalho(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Cálculo de Juros Simples</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ED145B",
    height: 40,
    borderRadius: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
})