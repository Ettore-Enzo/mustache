import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


export default function Screen1() {
  const navigation = useNavigation();
  const [racaoconsumida, setRacaoconsumida] = useState('');
  const [ganhodepeso, setGanhoDePeso] = useState('');
  const [animalSelecionado, setAnimalSelecionado] = useState('');
  const [resultado, setResultado] = useState(null);
 const calcularSoma = () => {
  const racao = parseFloat(racaoconsumida);
  const ganho = parseFloat(ganhodepeso);

  if (!isNaN(racao) && !isNaN(ganho) && ganho !== 0) {
    const resultadoCalculado = racao / ganho;
    setResultado(resultadoCalculado.toFixed(2));
  } else {
    setResultado('Por favor, insira números válidos.');
  }
};


  return (
    <View style={styles.container}>

      <Picker
  selectedValue={animalSelecionado}
  onValueChange={(itemValue, itemIndex) => setAnimalSelecionado(itemValue)}
  style={styles.picker}
>
  <Picker.Item label="Selecione um animal" value="" />
  <Picker.Item label="Aves (Para Consumo)" value="avesconsumo" />
  <Picker.Item label="Aves (Botadeiras)" value="avesbotadeiras" />
  <Picker.Item label="Suínos" value="suinos" />
  <Picker.Item label="Bovinos" value="bovinos" />
  <Picker.Item label="peixes" value="peixes" />
</Picker>
      <TextInput
        style={styles.input}
        placeholder="Ração Consumida"
        value={racaoconsumida}
        onChangeText={setRacaoconsumida}
        keyboardType="numeric"
      />

     <TextInput
  style={styles.input}
  placeholder={animalSelecionado === 'avesbotadeiras' ? 'Quantidade de Ovos' : 'Ganho de Peso'}
  value={ganhodepeso}
  onChangeText={setGanhoDePeso}
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
  picker: {
  height: 50,
  width: '100%',
  marginBottom: 15,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
},

});
