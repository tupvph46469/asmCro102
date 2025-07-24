import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CustomInput({ value, onChangeText, placeholder, secureTextEntry }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    width: '100%',
  },
});
