import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();
  const [pesoinicial, setPesoinicial] = useState('');
  const [pesofinal, setPesofinal] = useState('');
  const [ndias, setNdias] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularSoma = () => {
    const pesoInicial = parseFloat(pesoinicial);
    const pesoFinal = parseFloat(pesofinal);
    const dias = parseFloat(ndias);

    if (!isNaN(pesoInicial) && !isNaN(pesoFinal) && !isNaN(dias) && dias !== 0) {
      const resultadoCalculado = (pesoFinal - pesoInicial) / dias;
      setResultado(resultadoCalculado.toFixed(2));
    } else {
      setResultado('Por favor, insira números válidos (e número de dias diferente de 0).');
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Peso inicial"
        value={pesoinicial}
        onChangeText={setPesoinicial}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Peso final"
        value={pesofinal}
        onChangeText={setPesofinal}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Número de dias"
        value={ndias}
        onChangeText={setNdias}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.calcButton} onPress={calcularSoma}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== null && (
        <Text style={styles.resultadoText}>Resultado: {resultado}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Calculadora de Rações')}
      >
        <Text style={styles.buttonText}>Voltar à Tela Principal</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.extraText}>Desenvolvido por Larissa e Ettore.</Text>
      </View>
    </View>
  );
}

// Estilos permanecem inalterados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  calcButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#6c757d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultadoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  extraText: {
    fontSize: 18,
    color: '#fff',
  },
});
