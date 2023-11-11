import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
