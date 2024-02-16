import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom:20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: colors.green,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 35,
    color: 'white',
  },
});
