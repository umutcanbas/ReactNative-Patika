import {View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

import styles from './Input.style';

const Input = ({placeholder, onType, value, IconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon name={IconName} size={30} color="black" />
    </View>
  );
};

export default Input;
