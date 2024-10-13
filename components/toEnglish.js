import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Glyph from './glyph';
import { GLYPHOFFSET } from '../constants/offsets';
import EnglishDisplay from './englishDisplay';
import ImageIcon from './icon';
import SpaceGlyph from './spaceGlyph';


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
            <TouchableOpacity onPress={() => addCharacter('A')} style={styles.imageTopRight}>
              <Glyph leftOffset={GLYPHOFFSET.A.left} topOffset={GLYPHOFFSET.A.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('G')}>
              <Glyph leftOffset={GLYPHOFFSET.G.left} topOffset={GLYPHOFFSET.G.top} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('M')}>
              <Glyph leftOffset={GLYPHOFFSET.M.left} topOffset={GLYPHOFFSET.M.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('S')}>
              <Glyph leftOffset={GLYPHOFFSET.S.left} topOffset={GLYPHOFFSET.S.top} />
            </TouchableOpacity>
          </View>
        </View>

        {/* R1 C2 Group */}
        <View style={styles.group}>
          {/* First Group */}
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('B')} style={styles.imageTopRight}>
              <Glyph leftOffset={GLYPHOFFSET.B.left} topOffset={GLYPHOFFSET.B.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('H')}>
              <Glyph leftOffset={GLYPHOFFSET.H.left} topOffset={GLYPHOFFSET.H.top} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('N')}>
              <Glyph leftOffset={GLYPHOFFSET.N.left} topOffset={GLYPHOFFSET.N.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('T')}>
              <Glyph leftOffset={GLYPHOFFSET.T.left} topOffset={GLYPHOFFSET.T.top} />
            </TouchableOpacity>
          </View>
        </View>

        {/* R1 C3 Group */}
        <View style={styles.group}>
          {/* First Group */}
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('C')} style={styles.imageTopRight}>
              <Glyph leftOffset={GLYPHOFFSET.C.left} topOffset={GLYPHOFFSET.C.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('I')}>
              <Glyph leftOffset={GLYPHOFFSET.I.left} topOffset={GLYPHOFFSET.I.top} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('O')}>
              <Glyph leftOffset={GLYPHOFFSET.O.left} topOffset={GLYPHOFFSET.O.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('U')}>
              <Glyph leftOffset={GLYPHOFFSET.U.left} topOffset={GLYPHOFFSET.U.top} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        {/* R2 C1 Group */}
        <View style={styles.group}>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('D')} style={styles.imageTopRight}>
              <Glyph leftOffset={GLYPHOFFSET.D.left} topOffset={GLYPHOFFSET.D.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('J')}>
              <Glyph leftOffset={GLYPHOFFSET.J.left} topOffset={GLYPHOFFSET.J.top} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('P')}>
              <Glyph leftOffset={GLYPHOFFSET.P.left} topOffset={GLYPHOFFSET.P.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('W')}>
              <Glyph leftOffset={GLYPHOFFSET.W.left} topOffset={GLYPHOFFSET.W.top} />
            </TouchableOpacity>
          </View>
        </View>

        {/* R2 C2 Group */}
        <View style={styles.group}>
          {/* First Group */}
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('E')} style={styles.imageTopRight}>
              <Glyph leftOffset={GLYPHOFFSET.E.left} topOffset={GLYPHOFFSET.E.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('K')}>
              <Glyph leftOffset={GLYPHOFFSET.K.left} topOffset={GLYPHOFFSET.K.top} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('Z')}>
              <Glyph leftOffset={GLYPHOFFSET.Z.left} topOffset={GLYPHOFFSET.Z.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('X')}>
              <Glyph leftOffset={GLYPHOFFSET.X.left} topOffset={GLYPHOFFSET.X.top} />
            </TouchableOpacity>
          </View>
        </View>

        {/* R2 C3 Group */}
        <View style={styles.group}>
          {/* First Group */}
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('F')} style={styles.imageTopRight}>
              <Glyph leftOffset={GLYPHOFFSET.F.left} topOffset={GLYPHOFFSET.R.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('L')}>
              <Glyph leftOffset={GLYPHOFFSET.L.left} topOffset={GLYPHOFFSET.L.top} />
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => addCharacter('R')}>
              <Glyph leftOffset={GLYPHOFFSET.R.left} topOffset={GLYPHOFFSET.R.top} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addCharacter('Y')}>
              <Glyph leftOffset={GLYPHOFFSET.Y.left} topOffset={GLYPHOFFSET.Y.top} />
            </TouchableOpacity>
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
