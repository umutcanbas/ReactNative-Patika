import {Text, Image, Pressable, View} from 'react-native';
import React from 'react';
import styles from './MealsCard.style';

const MealsCard = ({meal, onSelect}) => {
  return (
    <Pressable style={styles.container} onPress={() => onSelect(meal.idMeal)}>
      <View style={styles.cardBody}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: meal.strMealThumb}}
        />
        <Text style={styles.title}>{meal.strMeal} </Text>
      </View>
    </Pressable>
  );
};

export default MealsCard;
