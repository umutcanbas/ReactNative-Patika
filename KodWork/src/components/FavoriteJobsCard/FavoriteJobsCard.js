import {View, Text, Pressable} from 'react-native';
import React from 'react';

import {useDispatch} from 'react-redux';

import styles from './FavoriteJobsCard.style.js';
import Button from '../Button/Button.js';

const FavoriteJobsCard = ({job, onSelect}) => {
  const dispatch = useDispatch();

  const removeFavorite = id => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {id}});
  };
  return (
    <View>
      <Pressable style={styles.container} onPress={onSelect}>
        <Text style={styles.title}>{job?.company?.name}</Text>
        <Text style={styles.company}>{job?.categories[0]?.name}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{job?.locations[0]?.name}</Text>
        </View>
        <Text style={styles.level}>{job?.levels[0]?.name}</Text>
        <Button onPress={() => removeFavorite(job.id)} title="Remove" />
      </Pressable>
    </View>
  );
};

export default FavoriteJobsCard;
