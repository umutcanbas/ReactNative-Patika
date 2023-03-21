import React from 'react';

import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <View style={sytles.container}>
      <Header />
      <ProductList />
    </View>
  );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default App;
