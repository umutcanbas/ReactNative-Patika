import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './JobCard.styles';

import {useNavigation} from '@react-navigation/native';

const JobCard = ({job}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Detail', {job})}>
      <Text style={styles.title}>{job?.company?.name}</Text>
      <Text style={styles.company}>{job?.categories[0]?.name}</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{job?.locations[0]?.name}</Text>
      </View>
      <Text style={styles.level}>{job?.levels[0]?.name}</Text>
    </Pressable>
  );
};

export default JobCard;
