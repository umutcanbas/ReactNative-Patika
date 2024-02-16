import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.style';

const Input = ({placeholder, value, onType, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
      autoCapitalize='none'
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="black"
        onChangeText={onType}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
