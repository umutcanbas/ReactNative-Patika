import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 15,
    marginHorizontal: 15,
    borderTopStartRadius: 70,
    borderBottomStartRadius: 70,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 5,
    marginRight: 15,
    borderRadius: 70,
  },
  title: {
    fontSize: 23,
    fontWeight: '400',
    color: 'black',
  },
});
