import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 13,
    backgroundColor: colors.green,
  },
  inner_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 5,
  },
  user: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  dislike_container: {
    backgroundColor: 'white',
    borderRadius: 27,
    alignSelf: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  dislike_count_container: {
    backgroundColor: colors.green,
    marginRight: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  dislike_count_text: {
    color: 'white',
    textAlign: 'center',
  },
  dislike_text: {
    color: colors.green,
    fontWeight: 'bold',
  },
});
