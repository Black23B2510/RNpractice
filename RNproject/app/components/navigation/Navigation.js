import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
const Tabs = createBottomTabNavigator();
const Home = ({navigation: {navigate}}) => {
  const [product, setProduct] = React.useState({
    name: 'Ho Thi Den',
  });
  //const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigate('Products')}>
        <Text>Move to Products</Text>
      </TouchableOpacity>
    </View>
  );
};
const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};
export const Setting = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};
const MyNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Cart" component={Cart} />
      <Tabs.Screen
        name="Setting"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </Tabs.Navigator>
  );
};
export default MyNavigation;
const styles = StyleSheet.create({});
