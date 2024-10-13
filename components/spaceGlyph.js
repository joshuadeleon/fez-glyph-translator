import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function SpaceGlyph() {
  return <View style={styles.spaceGlyph} />;
}

const styles = StyleSheet.create({
  spaceGlyph: {
    width: 40,
    height: 40,
    borderWidth: 5,
    borderColor: 'black',
  },
});
