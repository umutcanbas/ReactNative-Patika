import {View, Text, StyleSheet} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <View style={styles.container}>
      <Card title="Muharrem İnce" text="Bi Sus Be Allan Cezası Adam!" />
      <Card title="Kemal Kılıçdaroğlu" text="Alnımız ak başımız dik" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#e0e0e0`,
  },
});

export default App;
