import {View, FlatList, Image} from 'react-native';
import React from 'react';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Header from '../../components/Header/Header';

const Details = ({route,navigation}) => {
  const meal = route.params;

  const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;

  const {loading, error, data} = useFetch(API_URL);
  const renderDetail = ({item}) => {
    return <DetailsCard detail={item} />;
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const onGoBack = () => navigation.goBack();

  return (
    <View>
      <Header title="Detail" onGoBack={onGoBack} />
      <FlatList data={data.meals} renderItem={renderDetail} />
    </View>
  );
  s;
};

export default Details;
