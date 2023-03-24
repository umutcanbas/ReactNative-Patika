import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header/Header';

const App = () => {
  return (
    <View style={styles.container} >
      <Header/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  }
})
