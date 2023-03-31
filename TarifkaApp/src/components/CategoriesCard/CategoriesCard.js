import {Text, Pressable, Image} from 'react-native';
import React from 'react';

import styles from './CategoriesCard.style';

const CategoriesCard = ({category, onSelect}) => {
  return (
    <Pressable style={styles.container} onPress={() => onSelect(category.strCategory)}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: category.strCategoryThumb}}
      />
      <Text style={styles.title}>{category.strCategory} </Text>
    </Pressable>
  );
};

export default CategoriesCard;
