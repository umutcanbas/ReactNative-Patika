import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';

import styles from './Detail.style';
import Button from '../../components/Button/Button';

import RenderHtml from 'react-native-htmlview';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Detail = ({route}) => {
  const {width} = useWindowDimensions();

  const {job} = route.params;

  const dispatch = useDispatch();

  const state = useSelector(state => state.favoriteList);

  const isFavoriteJob = state.find(item => item.id == job?.id);

  const addFavoriteJob = job => {
    const id = job?.id;

    if (isFavoriteJob) {
      dispatch({type: 'REMOVE_FAVORITE', payload: {id}});
    } else {
      dispatch({type: 'ADD_FAVORITE', payload: {job}});
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.jobName}>{job?.company?.name} </Text>
        <Text style={styles.title}>
          Location: <Text style={styles.text}>{job?.locations[0]?.name} </Text>
        </Text>
        <Text style={styles.title}>
          level: <Text style={styles.text}>{job?.levels[0]?.name}</Text>
        </Text>
        <Text style={styles.jobDetailTitle}>Job Detail </Text>
        <View style={styles.detailContainer}>
          <RenderHtml contentWidth={width} value={job?.contents} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Submit" />
          <Button
            title={isFavoriteJob ? 'Remove Favorite' : 'Add Favorite'}
            onPress={() => addFavoriteJob(job)}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Detail;
