import React from 'react';
import { View, Text, Image} from 'react-native';

export default function ProductItem({ product }) {
  return (
    <View style={{ padding: 10, borderWidth: 1, borderRadius: 8, marginBottom: 10 }}>
      <Image source={{ uri: product.image }} style={{ height: 100, width: 200 }} />
      <Text style={{ fontWeight: 'bold' }}>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
}
