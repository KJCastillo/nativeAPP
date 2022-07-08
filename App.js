import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from './components/header';
import Todo from './components/todo';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1},
    { text: 'create an app', key: 2},
    { text: 'play on the ps4', key: 3}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  // pressHandler function receives the key, then filter the item with that key out of the array and return new array
  
  const submitHandler = (text) => {
    if(text.length > 0) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      })
    } else {
      Alert.alert('Oops!', 'todos cannot be blank', [
        {text: 'okay'}
      ])
    }
    }
// take in text that user types in, take in function as an argumen to rely on setTodos function, return new array using spread operator to have previous array and current todo with user text
  
return (
  <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss()
  }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
             data={todos}
             renderItem={({ item }) => (
               <Todo item={item} pressHandler={pressHandler}/>
              )}
            />
        </View>
      </View>    
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});