import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const UseLayoutEffect = () => {
  const [val, setVal] = React.useState(0);
  React.useLayoutEffect(() => {
    if (val > 4) {
      setVal(0);
      console.log(val);
    }
  }, [val]);
  const handleIncrease = () => {
    setVal(val + 1);
  };
  return (
    <View>
      <Text>useLayoutEffect</Text>
      <Text style={{fontSize: 30}}>{val}</Text>
      <TouchableOpacity onPress={handleIncrease}>
        <Text>Increase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseLayoutEffect;

const styles = StyleSheet.create({});
