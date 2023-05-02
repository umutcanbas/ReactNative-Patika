import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
}

const App = () => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <View style={{flex: 1}}>
        <First />
        <Second />
      </View>
    </Provider>
  );
};

const First = () => {
  const counter = useSelector(selector => selector.counter);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch({type: 'UPDATE_COUNTER'});
  };
  return (
    <View style={{flex: 1, backgroundColor: '#eceff1'}}>
      <Text style={{fontSize: 30}}>First: {counter} </Text>
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const Second = () => {
  const counter = useSelector(selector => selector.counter);
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30}}>Second : {counter} </Text>
    </View>
  );
};

export default App;
