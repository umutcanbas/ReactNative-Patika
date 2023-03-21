import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search.." />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E8F0F2',
    borderColor: '#E8F0F2',
  },
  container: {
    backgroundColor: 'white',
  },
});

export default SearchBar;
