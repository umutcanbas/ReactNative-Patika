import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    minHeight:100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
