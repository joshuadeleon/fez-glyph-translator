import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import EnglishInput from './textInput';
import GlyphDisplay from './glyphDisplay';
import ImageIcon from './icon';

export default function ToZuish() {
  const [inputText, setInputText] = useState('');

  const clearText = () => setInputText('');
  return (
    <View style={styles.englishTab}>
      <View style={styles.inputRow}>
        <EnglishInput inputText={inputText} setInputText={setInputText} />

        {/* Clear Text Button */}
        <TouchableOpacity onPress={clearText} style={styles.clearButton}>
          <ImageIcon imageSource={require('../assets/glyphs/clearGlyph.png')} />
        </TouchableOpacity>
      </View>

      {/* Display Box for Zuish Glyphs */}
      <GlyphDisplay inputText={inputText} />
    </View>
  );
}

const styles = StyleSheet.create({
  englishTab: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '90%',
  },
  clearButton: {
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
  },
});
