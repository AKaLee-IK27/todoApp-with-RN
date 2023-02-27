import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header({headerText}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{headerText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'coral',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
