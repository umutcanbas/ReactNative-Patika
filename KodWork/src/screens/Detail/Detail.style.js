import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  jobName: {
    fontWeight: 'bold',
    fontSize: 45,
    color: '#0C356A',
  },
  title: {
    color: 'tomato',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    color: 'black',
  },
  jobDetailTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0C356A',
  },
  detailContainer: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    paddingVertical:15
  },
});
