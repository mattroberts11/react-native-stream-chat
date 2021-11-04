import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { StreamChat } from 'stream-chat';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import {APP_KEY} from "@env";

export default function App() {
const api_key = process.env['APP_KEY'];

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Matts super cool app</Text>
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
});
