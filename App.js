import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [valueInput, setValueInput] = useState('');
  const [valueText, setValueText] = useState('');

  const onChangeText = (text) => {
    console.log('Cambia', text);
    setValueInput(text);
  }

  const onPress = () => {
    console.log('PULSA BOTON');
    setValueText(valueInput);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{valueText}</Text>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
      />
      <Button
        onPress={onPress}
        title='CAMBIA TEXTO'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30
  },
  input: {

  }
});
