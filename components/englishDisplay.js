import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function EnglishDisplay({ letterSequence }) {

  const scrollViewRef = useRef();

  // Use effect to scroll to the bottom when letterSequence is updated
  useEffect(() => {
    // Scroll to the end when a new letter is added
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [letterSequence]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        ref={scrollViewRef}
      >
        <Text style={styles.letterText}>
          {letterSequence.join('')}  {/* Join the array of letters into a string */}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 1,
    height: 100,
    width: '90%',
  },
  letterText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  scrollViewStyle: {
    flexGrow: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  }
});
