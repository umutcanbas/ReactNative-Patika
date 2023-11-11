import {Pressable, Text} from 'react-native';
import React from 'react';

import styles from './PageButton.style';

const PageButton = ({onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>More</Text>
    </Pressable>
  );
};

export default PageButton;
