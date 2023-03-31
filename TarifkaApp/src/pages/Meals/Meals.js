import {View, FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';

import MealsCard from '../../components/MealsCard/MealsCard';
import styles from './Meals.style';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Header from '../../components/Header/Header';

const Meals = ({route, navigation}) => {
  const category = route.params;
  const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  const {loading, error, data} = useFetch(API_URL);

  const handleMealSelect = meal => {
    navigation.navigate('DetailsScreen', meal);
  };

  const renderMeals = item => (
    <MealsCard meal={item} onSelect={handleMealSelect} />
  );
  
   const  onGoBack =()=> navigation.goBack()

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Header title="Meals" onGoBack={onGoBack} />
      <FlatList data={data?.meals} renderItem={({item}) => renderMeals(item)} />
    </View>
  );
};

export default Meals;
