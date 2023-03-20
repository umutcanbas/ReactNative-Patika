import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './Banner.style';
import news_banner_data from '../../news_banner_data.json';

const Banner = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerNews => (
        <Image
          style={styles.banner_image}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
};

export default Banner;
