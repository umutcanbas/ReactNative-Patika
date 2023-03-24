import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const AddTodo = ({value, setValue, onSave}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={value => setValue(value)}
        style={styles.input}
        placeholder="What needs To be Done"
        placeholderTextColor="rgb(113,144,144)"
      />
      <TouchableOpacity
        style={[
          styles.button_container,
          {
            backgroundColor:
              value.length === 0 ? 'rgb(117,117,117)' : 'rgb(255, 152, 35)',
          },
        ]}
        onPress={onSave}
        disabled={value.length === 0}>
        <Text style={styles.button_title}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
    height: 100,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'rgb(47,62,69)',
  },
  input: {
    marginHorizontal: 10,
    paddingBottom: 8,
    color: 'white',
    borderBottomColor: 'rgb(106,133,145)',
    borderBottomWidth: 1,
  },
  button_container: {
    backgroundColor: 'rgb(255,152,35)',
    marginHorizontal: 25,
    marginTop: 15,
    marginBottom: 8,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button_title: {
    color: 'white',
    fontSize: 15,
  },
});
