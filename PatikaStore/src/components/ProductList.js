import React from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import products from '../asset/db.json';
import Content from './Content';
import SearchBar from './SearchBar';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList
      ListHeaderComponent={()=> <SearchBar/>}
        renderItem={({item}) => <Content product={item} />}
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

export default ProductList;
