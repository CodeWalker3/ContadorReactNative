import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Quantidade de Pessoas</Text>
      <Text style = {styles.contador}>{count}</Text>
      <TouchableOpacity onPress={()=> setCount(count+1)}>
        <Text style={styles.calculo}>+</Text>
      </TouchableOpacity>
      {count > 0 &&
      <TouchableOpacity onPress={()=> setCount(count-1)}>
        <Text style={styles.calculo}>-</Text>
      </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636aba',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom:'20%',
  },
  contador:{
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor:"#ffffff",
    paddingBottom:40,
    paddingTop:40,
    paddingLeft:100,
    paddingRight:100,
    borderRadius: 15,
    marginBottom: 20,
  },
  calculo:{
    marginTop: 20,
    backgroundColor:"#2e2252",
    color:"#ffffff",
    paddingBottom:40,
    paddingTop:40,
    paddingLeft:130,
    paddingRight:130,
    borderRadius: 5,
    marginBottom: 20,
  }
});
