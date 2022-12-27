import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const UseMemo = () => {
  const [val, setVal] = React.useState();
  const [number, setNumber] = React.useState([]);
  const handleIncrease = () => {
    setNumber([...number, val]);
    console.log('here you are');
  };
  //console.log(number);
  // const total = () => {
  //   const result = number.reduce((re, prop) => {
  //     return re + prop;
  //   });
  //   return result;
  // };
  const total = useMemo(() => {
    const result = number.reduce((re, value) => {
      console.log('tinh toan lai ...');
      return re + parseInt(value);
    }, 0);
    return result;
  }, [number]);
  return (
    <View>
      <TextInput onChangeText={text => setVal(text)} />
      <TouchableOpacity
        onPress={() => {
          handleIncrease();
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
      {number.map(value => {
        return <Text>{value}</Text>;
      })}
      <Text>Total: {total}</Text>
    </View>
  );
};

export default UseMemo;

const styles = StyleSheet.create({});
