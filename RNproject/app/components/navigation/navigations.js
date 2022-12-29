import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyNavigation from './Navigation';
const nav = createNativeStackNavigator();
const Products = () => {
  return (
    <View>
      <Text>Products</Text>
    </View>
  );
};
const Navigations = () => {
  return (
    <nav.Navigator>
      <nav.Screen
        name="Main"
        component={MyNavigation}
        options={{headerShown: false}}
      />
      <nav.Screen name="Products" component={Products} />
    </nav.Navigator>
  );
};

export default Navigations;

const styles = StyleSheet.create({});
