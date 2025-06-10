import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'; // Biblioteca de ícones
import { Picker } from '@react-native-picker/picker';


// Suas telas importadas
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';
import Screen4 from './screens/screen4';

const screenWidth = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Tela principal
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tela 1')}
        >
          <Text style={styles.buttonText}>Matéria Seca</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tela 2')}
        >
          <Text style={styles.buttonText}>Ganho de Peso Diário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tela 3')}
        >
          <Text style={styles.buttonText}>Conversão Alimentar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tela 4')}
        >
          <Text style={styles.buttonText}>Cálculo 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.extraText}>Desenvolvido por Larissa e Ettore.</Text>
      </View>
    </View>
  );
}

// Drawer com as telas internas
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#2196f3',
        drawerLabelStyle: { fontSize: 16 },
           
        
      }}
      
    >
      <Drawer.Screen
        name="Calculadora de Rações"
        component={HomeScreen}
        options={{
          drawerIcon: () => <Icon name="calculator" size={24} color="#2196f3" />, // Ícone de calculadora
        }}
      />
      <Drawer.Screen
        name="Tela 1"
        component={Screen1}
        options={{
          drawerIcon: () => <Icon name="file-text" size={24} color="#2196f3" />, // Ícone de texto
        }}
      />
      <Drawer.Screen
        name="Tela 2"
        component={Screen2}
        options={{
          drawerIcon: () => <Icon name="file" size={24} color="#2196f3" />, // Ícone de arquivo
        }}
      />
      <Drawer.Screen
        name="Tela 3"
        component={Screen3}
        options={{
          drawerIcon: () => <Icon name="cogs" size={24} color="#2196f3" />, // Ícone de engrenagens
        }}
      />
      <Drawer.Screen
        name="Tela 4"
        component={Screen4}
        options={{
          drawerIcon: () => <Icon name="rocket" size={24} color="#2196f3" />, // Ícone de foguete
        }}
      />
    </Drawer.Navigator>
  );
}

// App principal com Stack e Drawer organizados corretamente
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
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
  botoes: {
    width: '100%',
    padding: 30,
  },
  button: {
    backgroundColor: '#3e5c76',
    width: screenWidth * 0.8,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
