import {View, StyleSheet, FlatList, Text} from 'react-native';
import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todos, onChangestatus, onDelete}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <Todo
            onDelete={onDelete}
            todo={item}
            onChangestatus={onChangestatus}
          />
        )}
      />
      {todos.length === 0 && <Text style={styles.text}>All is Done!</Text>}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 115,
    color: 'white',
    marginBottom: 150,
    alignSelf: 'center',
  },
});
