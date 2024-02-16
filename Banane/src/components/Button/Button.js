import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';

import styles from './Button.style';

const Button = ({onPress, loading, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={styles.container}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles.button_container}>
          <Text style={styles.title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
