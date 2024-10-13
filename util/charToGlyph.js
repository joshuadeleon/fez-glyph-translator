import React from 'react';
import { View } from 'react-native';
import Glyph from '../components/glyph';
import { GLYPHOFFSET } from '../constants/offsets';


export const displayGlyph = (char) => {
  const offsets = GLYPHOFFSET[char.toUpperCase()];

  if (offsets) {
    return <Glyph leftOffset={offsets.left} topOffset={offsets.top} />;
  } else if (char.trim() === '') { // empty view if not letter / in mapping
    return <View style={{ width: 40, height: 40 }} />;
  } else {
    return null;
  }
};