import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { displayGlyph } from "../util/charToGlyph";


// Split input text into columns, one letter per image, grouped for vertical stacking
const translatedColumns = (inputText) => inputText.split('').reduce((columns, letter, idx) => {
  const columnIndex = Math.floor(idx / 10); // Assuming 10 letters per column
  if (!columns[columnIndex]) {
    columns[columnIndex] = [];
  }
  columns[columnIndex].push(letter);
  return columns;
}, []);

export default function GlyphDisplay({ inputText }) {
  return (
    <View style={styles.scrollBoxContainer}>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={[styles.scrollContent]}>
        {translatedColumns(inputText).reverse().map((column, columnIndex) => (
          <View key={columnIndex} style={styles.column}>
            {column.map((letter, index) => {
              const glyph = displayGlyph(letter); // Store the result of displayGlyph
              return glyph ? ( // Only render if glyph is not null
                <View key={index} style={styles.glyphContainer}>
                  {glyph}
                </View>
              ) : null; // Render nothing if glyph is null
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollBoxContainer: {
    width: 300,   // Set a fixed width to constrain the ScrollView's size
    //height: 200,  // Optional: If you want to constrain the height as well
  },
  scrollView: {
    width: '100%',  // Make the ScrollView take up the full width of its parent
  },
  scrollContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align columns to the right
    flexGrow: 1,  // Ensure content grows beyond the visible area
  },
  column: {
    flexDirection: 'column',
    marginHorizontal: 10,  // Space between columns horizontally
  },
  glyphContainer: {
    marginBottom: 5,  // 5px space between each image vertically
  },
});