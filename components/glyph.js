import React from "react";
import { View, Image, StyleSheet } from "react-native";


const imageSource = require('../assets/glyphs/fezGlyphs.png');

export default function Glyph({ leftOffset = 0, topOffset = 0, imageWidth = 40, imageHeight = 40, focused = true }) {
  return (
    <View style={[styles.view, { width: imageWidth, height: imageHeight }]}>
      <Image
        source={imageSource}
        style={{ marginLeft: leftOffset, marginTop: topOffset, opacity: focused ? 1 : 0.3 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    overflow: 'hidden'
  },
});
