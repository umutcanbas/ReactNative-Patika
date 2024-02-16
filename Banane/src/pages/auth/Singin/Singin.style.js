import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 150,
    fontWeight: 'bold',
    color: colors.darkblue,
    margin: 5,
  },

  body_container: {
    flex: 1,
  },
});
