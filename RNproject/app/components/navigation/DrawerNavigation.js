import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Package = () => {
  return (
    <View>
      <Text>Package</Text>
    </View>
  );
};
const History = () => {
  return (
    <View>
      <Text>History</Text>
    </View>
  );
};
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Package">
      <Drawer.Screen
        name="Package"
        options={{drawerLable: 'Package'}}
        component={Package}
      />
      <Drawer.Screen
        name="History"
        options={{drawerLable: 'History'}}
        component={History}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
