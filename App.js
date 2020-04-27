import React from 'react';
import { StyleSheet, View } from 'react-native';
import Authentication from './src/screens/security/authentication';

export default function App() {
  return (
    <View style={styles.container}>
      <Authentication/>
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
