import React from 'react';
import { View, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
import products from '../data/products';

export default function ProductScreen() {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
}