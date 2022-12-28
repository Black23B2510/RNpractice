import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const HookPractice = () => {
  const [name, setName] = useState('');
  //console.log('Im den');
  //không truyền vào thì undefined,didMount,didUpdate, unMount
  useEffect(() => {
    //không truyền dependencies cũng chạy,unMount: chạy khi component không chạy nữa, update dependencies để clear state cũ
    setName(name);
    console.log('Im den');
  }, [name]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.txtInput}
        placeholder="Enter your name"
        onSubmitEditing={value => setName(value.nativeEvent.text)}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default HookPractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    padding: 10,
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    color: 'green',
  },
});
