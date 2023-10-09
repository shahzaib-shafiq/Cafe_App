import * as React from 'react';
import { View, Text } from 'react-native';

export default function Footer() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        marginTop:80,
        marginBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
          padding:20,

          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}