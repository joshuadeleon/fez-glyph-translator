import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function SpaceGlyph() {
  return <View style={styles.spaceGlyph} />;
}

const styles = StyleSheet.create({
  spaceGlyph: {
    width: 40,                  // Width in React Native
    height: 40,                 // Height in React Native
    borderWidth: 5,             // Border thickness
    borderColor: 'black',       // Border color
  },
});
