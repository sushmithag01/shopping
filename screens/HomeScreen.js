import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Button title="View Products" onPress={() => navigation.navigate('Product')} />
      <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}