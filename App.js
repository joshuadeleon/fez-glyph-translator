import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabsContainer from './components/tabsContainer';

// Main App
export default function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar style='dark-container' /> */}
      <TabsContainer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
