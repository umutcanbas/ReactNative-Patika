import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './Detail.style';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Detail = ({route}) => {
  const {id} = route.params;
  const URL = `https://fakestoreapi.com/products/${id} `;

  const {loading, error, data} = useFetch(URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title} </Text>
        <Text style={styles.desc}>{data.description} </Text>
        <Text style={styles.price}>{data.price} ₺ </Text>
      </View>
    </View>
  );
};

export default Detail;
