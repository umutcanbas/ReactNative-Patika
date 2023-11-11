import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 'auto',
    backgroundColor: 'white',
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 8,
    padding: 8,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  company: {
    fontWeight: '400',
    color: 'black',
    fontSize: 15,
  },
  locationContainer: {
    width: '50%',
    backgroundColor: 'tomato',
    padding: 3,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  level: {
    fontWeight: '400',
    color: 'tomato',
    fontSize: 15,
    textAlign: 'right',
  },
});
