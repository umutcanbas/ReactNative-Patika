import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import styles from './DetailsCard.style';

const DetailsCard = ({detail}) => {
  const link = detail.strYoutube.toString();
 

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: detail.strMealThumb}} />
      <Text style={styles.title}>{detail.strMeal} </Text>
      <Text style={styles.area}>{detail.strArea}</Text>
      <Text style={styles.ins}>{detail.strInstructions}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(link)}>
        <Text style={styles.button_text}>Watch on Youtube </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsCard;
