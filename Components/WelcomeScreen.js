// import * as React from 'react';
// import { View, Text } from 'react-native';

// export default function welcomescreen() {
//   return (
//     <View style={{ flex: 0.5 }}>
//       <Text
//         style={{fontWeight: 'bold' ,  padding: 40, fontSize: 30, color: 'black' }}
//         numberOfLines={3}>
//         Welcome to Little Lemon{"\n"}
//         <Text style={{fontWeight: 'light' ,  fontSize: 20, color: 'black' }}> Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>     {' '}
//       </Text>
//     </View>
//   );
// }
import * as React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </View>
  );
}