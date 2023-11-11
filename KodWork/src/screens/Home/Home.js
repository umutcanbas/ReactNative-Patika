import {View, ActivityIndicator, FlatList} from 'react-native';
import React, {useState} from 'react';

import JobCard from '../../components/JobCard/JobCard';
import useFetch from '../../Hooks/useFetch';
import PageButton from '../../components/PageButton/PageButton';

const Home = () => {
  const [page, setPage] = useState(1);

  const {data, loading, error} = useFetch(
    `https://www.themuse.com/api/public/jobs?page=${page}`,
  );

  if (loading) {
    return <ActivityIndicator loading={loading} />;
  }

  const handlePage = () => {
    setPage(page + 1);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => <JobCard job={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<PageButton onPress={() => handlePage()} />}
      />
    </View>
  );
};

export default Home;
