//React đang được dùng khi return về một component;
//setVal(val) => re-render
//khi setState dùng preState
//Custom Hooks tách logic ra khỏi View, dùng cho nhiều component có logic tương tự
//return về các logic, hoặc không return
//Tạo một view hiển thị giờ, phút, giây
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetHour} from './useGetHour';
const Home = () => {
  const {times} = useGetHour();
  return (
    <View>
      <Text>Clock</Text>
      <Text style={{fontSize: 30}}>{times}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
