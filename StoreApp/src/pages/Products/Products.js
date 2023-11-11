import React from 'react';
import { FlatList} from 'react-native';
import Config from 'react-native-config';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';

const API_URL = 'https://fakestoreapi.com/products';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(API_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={()=> handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
