import React from 'react';

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Content = ({product}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title} </Text>
      <Text style={styles.price}>{product.price} </Text>

      <Text
        style={
          product.inStock === true ? styles.activeStock : styles.passiveStock
        }>
        {product.inStock === true ? 'Sepete Ekle' : 'Stokta Yok'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex:1,
    backgroundColor: '#E8F0F2',
    margin: 5,
    paddingBottom: 20,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2,
   /*  height: Dimensions.get('window').height / 2.1, */
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    resizeMode: 'contain',
    margin: 10,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  activeStock: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    bottom: 0,
    left: 10,
  },
  passiveStock: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    bottom: 0,
    left: 10,
  },
});
export default Content;
