import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
 
import Cabecalho from './components/Cabecalho';
import Entrada from './components/Entrada';
 
export default function App() {
 const [textValor, setTextValor] = useState('0.00');
 const [textMeses, setTextMeses] = useState('1');
 const [textTaxa, setTextTaxa] = useState('0.00');
 
 return (
 <View style={styles.container}>
 <Cabecalho />
 <View style={{ padding: 10 }}>
 <Entrada
 titulo="Valor"
 valor={textValor} 
 onChange={texto => setTextValor(texto)}
 />
 <Entrada
 titulo="N° de Meses"
 valor={textMeses} 
 onChange={texto => setTextMeses(texto)}
 />
 <Entrada
 titulo="Taxa de Juros (%)"
 valor={textTaxa} 
 onChange={texto => setTextTaxa(texto)}
 />
 </View>
 <Text>{textValor}</Text>
 <StatusBar barStyle="defautl" />
 </View>
 );
}
 
const styles = StyleSheet.create({
 container: {
 flex: 1,
 },
});