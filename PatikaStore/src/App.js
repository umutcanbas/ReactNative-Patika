import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
const App = () => {
  return (
    <View style={sytles.container} >
      <Header/>
      <SearchBar/>
    </View>
  )
};


const sytles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"grey"

  }
})


export default App;
