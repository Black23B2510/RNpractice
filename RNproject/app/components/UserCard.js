import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const UserCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={item.img} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDelete}>
            <Text style={styles.txtDelete}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  content: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    color: 'black',
    paddingBottom: 15,
    fontSize: 20,
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: 'green',
    width: 100,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  btnDelete: {
    backgroundColor: 'lightgrey',
    width: 100,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  txtBtn: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
  txtDelete: {
    textAlign: 'center',
    color: 'black',
    padding: 10,
  },
});
