import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import Header from './component/Header/Header';
import TodoList from './component/TodoList/TodoList';
import AddTodo from './component/AddTodo/AddTodo';

import {MMKV} from 'react-native-mmkv';

const App = () => {
  const storage = new MMKV();

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const activeTodos = todos.filter(todo => !todo.isCompleted);

  useEffect(()=>{
    const todos = storage.getString("todos")
    if(todos){
      setTodos(JSON.parse(todos))
    }

  },[])

  const onSave = () => {
    const newTodo = {
      id: todos.length + 1,
      title: value,
      isCompleted: false,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    storage.set('todos', JSON.stringify(newTodos));
    setValue('');
  };

const jsonTodos = storage.getString("todos")
const todosObject = JSON.parse(jsonTodos)


  const onChangestatus = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, isCompleted: !todo.isCompleted};
      }

      return todo;
    });
    setTodos(newTodos);
    storage.set('todos', JSON.stringify(newTodos));
  };


  const onDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    storage.set('todos', JSON.stringify(newTodos));
  };

  return (
    <View style={styles.container}>
      <Header todosCount={activeTodos.length} />
      <TodoList
        todos={todos}
        onChangestatus={onChangestatus}
        onDelete={onDelete}
      />
      <AddTodo value={value} setValue={setValue} onSave={onSave} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(16,30,35)',
  },
});
