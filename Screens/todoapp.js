import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from 'D:/Ben/Workspace/todoapp/components/header';
import TodoItem from 'D:/Ben/Workspace/todoapp/components/todoitem';
import AddToDo from 'D:/Ben/Workspace/todoapp/components/addtodo';

export default function TodoApp({navigation, route}) {
  const [todos, setTodos] = useState([
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = (text, setText) => {
    if(text !== ''){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos,
        ];
      })
      setText('');
    } else {
      Alert.alert('Opps!', 'Please type something', [
        {text: 'Understood'}
      ])
    }
  }
  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => { 
      if(Keyboard.isVisible()) Keyboard.dismiss();
    }}>
      <SafeAreaView style={styles.container}>
        <View>
          <Header headerText={'Todo list'}/>
          <View style={styles.content}>
            <AddToDo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item}) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

