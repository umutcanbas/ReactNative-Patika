import {FlatList, View} from 'react-native';
import React from 'react';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header/Header';
import styles from './Categories.style';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Categories = ({navigation}) => {
  const {loading, error, data} = useFetch(API_URL);

  const handleCategorySelect = category => {
    navigation.navigate('MealsScreen', category);
  };

  const renderCategories = item => (
    <CategoriesCard category={item} onSelect={handleCategorySelect} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Header title="Categories" />
      <FlatList
        data={data?.categories}
        renderItem={({item}) => renderCategories(item)}
      />
    </View>
  );
};

export default Categories;
