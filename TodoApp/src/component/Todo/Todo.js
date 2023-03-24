import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Todo = ({todo, onChangestatus, onDelete}) => {
  return (
    <TouchableOpacity
      onPress={() => onChangestatus(todo.id)}
      onLongPress={() => onDelete(todo.id)}
      style={[
        styles.container,
        {
          backgroundColor: todo.isCompleted
            ? 'rgb(47, 62, 69)'
            : 'rgb(114, 153, 78)',
        },
      ]}>
      <Text
        style={todo.isCompleted ? styles.passive_title : styles.active_title}>
        {todo.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 8,
    marginBottom: 10,
  },

  title: {
    color: 'white',
    fontSize: 18,
  },
  passive_title: {
    color: 'rgb(117, 117, 117)',
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});
