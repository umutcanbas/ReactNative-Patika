import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = ({todosCount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToDos</Text>
      <Text style={styles.text}>{todosCount} </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 75,
  },
  text: {
    color: 'rgb(255, 152, 35)',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
