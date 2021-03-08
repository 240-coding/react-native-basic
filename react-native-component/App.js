import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Seoyoung'
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is {name === 'Seoyoung' ? 'Seoyoung Lee' : 'React Native'}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

