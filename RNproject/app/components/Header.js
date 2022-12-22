import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.topTitle}>
      <Text style={styles.title}>Friend requests</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtBtn}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topTitle: {
    backgroundColor: 'lightgrey',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  txtBtn: {
    color: 'lightblue',
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
  },
});
