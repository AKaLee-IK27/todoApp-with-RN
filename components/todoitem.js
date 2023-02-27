import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Ionic name='trash-outline' size={16} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'coral',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


});
