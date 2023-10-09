import * as React from 'react';
import { View, Text } from 'react-native';

import Header from './Components/Header';
import Footer from './Components/Footer';
import WelcomeScreen from "./Components/WelcomeScreen";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <Header />
        <WelcomeScreen/>
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <Footer />
      </View>
    </>
  );
}