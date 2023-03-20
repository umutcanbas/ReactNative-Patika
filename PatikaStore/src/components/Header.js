import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={sytles.container}>
      <Text style={sytles.title}>PATİKA STORE</Text>
    </View>
  );
};

const sytles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    color: '#8a2be2',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 11,
  },
});

export default Header;
