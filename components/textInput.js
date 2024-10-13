import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Glyph from './glyph';

export default function EnglishInput({ inputText, setInputText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Text to Translate..."
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        multiline={true}
        scrollEnabled
        textAlignVertical='top'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 24,
    paddingVertical: 5,
    width: 300,
  },
});
