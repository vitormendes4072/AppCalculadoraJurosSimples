import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function Entrada({ titulo, valor, onChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{titulo}</Text>
      <TextInput 
        style={styles.input} 
        keyboardType="numberic"
        value={valor}
        onChangeText={onChange}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    flex: 2,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10,
  },
  input: {
    flex: 3,
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 18,
    paddingHorizontal: 12,
    textAlign: 'right',
  },
});
