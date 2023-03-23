import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard/songCard';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      const artist = song.artist.toLowerCase();
      return (artist.indexOf(searcedText) > -1
         || currentTitle.indexOf(searcedText) > -1
      )
    });
    setList(filteredList);
  };
  const [list, setList] = useState(music_data);

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />

      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
