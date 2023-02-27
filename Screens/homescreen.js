import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from 'react-native';
import Header from 'D:/Ben/Workspace/todoapp/components/header';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
export default function HomeScreen() {
  const [name, setName] = useState('');

  const setData = async () => {
    if(name.length == 0) {
      Alert.alert('Warning!', 'Please enter your name');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={'Home Screen'}/>
      <View style={styles.bodyView}>
        <Text style={styles.helloText}>Hey, Hello 👋</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  helloText: {
    fontSize: 24,
    fontStyle: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  bodyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});