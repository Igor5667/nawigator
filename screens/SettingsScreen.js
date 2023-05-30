import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [Color, setColor] = useState('black');

  const changeMode = () => {
    const newColor = backgroundColor === 'white' ? '#555' : 'white';
    setBackgroundColor(newColor);
    const newColorText = backgroundColor !== 'white' ? 'black' : 'white';
    setColor(newColorText)
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor}]}>
      <Text style={[styles.text, { color: Color}]}>Swich to</Text>
      <TouchableOpacity style={styles.button} onPress={changeMode}>
        <Text style={styles.buttonText}>{backgroundColor === 'white' ? 'Dark Mode' : 'Light Mode'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
