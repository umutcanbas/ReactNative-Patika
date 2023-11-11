import {View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FavoriteJobsCard from '../../components/FavoriteJobsCard/FavoriteJobsCard';

const Favorities = ({navigation}) => {
  const favorites = useSelector(state => state.favoriteList);

  const handleJobSelect = item => {
    navigation.navigate('Detail', {job: item});
  };

  const renderItem = ({item}) => {
    return (
      <FavoriteJobsCard job={item} onSelect={() => handleJobSelect(item)} />
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList data={favorites} renderItem={renderItem} />
    </View>
  );
};

export default Favorities;
