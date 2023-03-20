import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard/NewsCard';
import Banner from './components/Banner/Banner';
import news_data from './news_data.json';


const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keys = (item, index) => item.u_id.toString();
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>NEWS</Text>
      <FlatList
        ListHeaderComponent={() => (
         <Banner/>
        )}
        keyExtractor={keys}
        data={news_data}
        renderItem={renderNews}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  
  header_text: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
