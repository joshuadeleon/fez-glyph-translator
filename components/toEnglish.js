import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import EnglishDisplay from './englishDisplay';
import ImageIcon from './icon';
import SpaceGlyph from './spaceGlyph';
import TouchableGlyph from './touchableGlyph';


export default function ToEnglish() {

  const [letterSequence, setLetterSequence] = useState([]);

  const addCharacter = (letter) => {
    console.log(`${letter} pressed!`);
    setLetterSequence((letters) => [...letters, letter]);
    // Perform any action you want here (e.g., navigate or alert)
  };

  const clearAllCharacters = () => {
    console.log('Clear All');
    setLetterSequence([]);
  };

  const backspace = () => {
    console.log('Backspace');
    setLetterSequence((letters) => letters.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* R1 C1 Group */}
        <View style={styles.group}>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'A'} onPress={addCharacter} style={styles.imageTopRight} />
            <TouchableGlyph char={'G'} onPress={addCharacter} />
          </View>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'M'} onPress={addCharacter} />
            <TouchableGlyph char={'S'} onPress={addCharacter} />
          </View>
        </View>

        {/* R1 C2 Group */}
        <View style={styles.group}>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'B'} onPress={addCharacter} style={styles.imageTopRight} />
            <TouchableGlyph char={'H'} onPress={addCharacter} />
          </View>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'N'} onPress={addCharacter} />
            <TouchableGlyph char={'T'} onPress={addCharacter} />
          </View>
        </View>

        {/* R1 C3 Group */}
        <View style={styles.group}>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'C'} onPress={addCharacter} style={styles.imageTopRight} />
            <TouchableGlyph char={'I'} onPress={addCharacter} />
          </View>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'O'} onPress={addCharacter} />
            <TouchableGlyph char={'U'} onPress={addCharacter} />
          </View>
        </View>
      </View>

      <View style={styles.row}>
        {/* R2 C1 Group */}
        <View style={styles.group}>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'D'} onPress={addCharacter} style={styles.imageTopRight} />
            <TouchableGlyph char={'J'} onPress={addCharacter} />
          </View>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'P'} onPress={addCharacter} />
            <TouchableGlyph char={'W'} onPress={addCharacter} />
          </View>
        </View>

        {/* R2 C2 Group */}
        <View style={styles.group}>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'E'} onPress={addCharacter} style={styles.imageTopRight} />
            <TouchableGlyph char={'K'} onPress={addCharacter} />
          </View>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'Z'} onPress={addCharacter} />
            <TouchableGlyph char={'X'} onPress={addCharacter} />
          </View>
        </View>

        {/* R2 C3 Group */}
        <View style={styles.group}>
          {/* First Group */}
          <View style={styles.imageRow}>
            <TouchableGlyph char={'F'} onPress={addCharacter} style={styles.imageTopRight} />
            <TouchableGlyph char={'L'} onPress={addCharacter} />
          </View>
          <View style={styles.imageRow}>
            <TouchableGlyph char={'R'} onPress={addCharacter} />
            <TouchableGlyph char={'Y'} onPress={addCharacter} />
          </View>
        </View>
      </View>

      <View style={styles.row}>
        {/* R3 C1 Group */}
        <View style={styles.group}>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => backspace()} style={styles.imageTopRight}>
              <ImageIcon imageSource={require('../assets/glyphs/backspaceGlyph.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clearAllCharacters()}>
              <ImageIcon imageSource={require('../assets/glyphs/clearGlyph.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter(' ')}>
              <SpaceGlyph />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <EnglishDisplay letterSequence={letterSequence} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Container Padding
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40, // Horizontal space between groups
  },
  group: {
    justifyContent: 'space-between',
    marginHorizontal: 20, // Horizontal space between groups
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  imageTopRight: {
    marginRight: 5,
  }
});
