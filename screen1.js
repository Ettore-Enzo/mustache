

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();
  const [pesoinicial, setPesoinicial] = useState('');
  const [pesoFinal, setPesofinal] = useState('');
  const [resultado, setResultado] = useState(null);
  const [resultado2, setResultado2] = useState(null);

  const calcularSoma = () => {
    const pesoInicial = parseFloat(pesoinicial);
    const pesoFinalValue = parseFloat(pesoFinal);

    if (!isNaN(pesoInicial) && !isNaN(pesoFinalValue)) {
      const resultadoCalculado = -(((pesoInicial - pesoFinalValue) / pesoInicial) * 100) + 100;
       setResultado(resultadoCalculado.toFixed(2));
       // Exibe o resultado com 2 casas decimais
    } else {
      setResultado('Por favor, insira números válidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Desidrate a amostra, anotando o seu peso (em gramas) antes e depois do processo.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Peso inicial"
        value={pesoinicial}
        onChangeText={setPesoinicial}  // Atualiza o estado corretamente
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Peso final"
        value={pesoFinal}
        onChangeText={setPesofinal}  // Atualiza o estado corretamente
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.calcButton} onPress={calcularSoma}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== null && (
        <Text style={styles.resultadoText}>Resultado: {resultado + "%"}</Text>
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
