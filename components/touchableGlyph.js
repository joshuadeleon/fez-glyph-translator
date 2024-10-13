import React from 'react';
import { TouchableOpacity } from 'react-native';
import { displayGlyph } from '../util/charToGlyph';


export default function TouchableGlyph({ char, onPress, style }) {
  const onPressHandler = () => onPress(char)

  return (
    <TouchableOpacity onPress={onPressHandler} style={style}>
      {displayGlyph(char)}
    </TouchableOpacity>
  );
}