import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const AlertBtn = () => {
  const simpleAlert = () => {
    Alert.alert(
      'Login',
      'Login sucessfully',
      [{text: 'Ok', onPress: () => console.log('OK')}, ,],
      {cancelable: true},
    );
  };
  const twoAlertHandle = () => {
    Alert.alert(
      'Login',
      'Do you want to delete this item?',
      [
        {text: 'Yes', onPress: () => console.log('Yes Pressed')},
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={simpleAlert}>
        <Text style={styles.simple}>Click me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={twoAlertHandle}>
        <Text style={styles.simple}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertBtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    margin: 5,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 100,
    height: 40,
  },
  simple: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
