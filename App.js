import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Router from './src/router/router';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
