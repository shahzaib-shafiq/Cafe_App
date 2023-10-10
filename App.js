import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './Components/Header';
import Footer from './Components/Footer';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

