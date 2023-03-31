import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const Header = ({title, onGoBack}) => {
  return (
    <View style={styles.container}>
      {onGoBack && (
        <Pressable onPress={onGoBack}>
          <Text style={styles.button}>{`< Back`}</Text>
        </Pressable>
      )}
      <Text style={[styles.title, {marginLeft: onGoBack ? 90 : 120}]}>
        {' '}
        {title}{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 8,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  button: {color: 'orange', fontSize: 19, fontWeight: 'bold'},

  title: {
    color: 'orange',
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default Header;
