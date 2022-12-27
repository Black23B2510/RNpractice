import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const PracticeContext = React.createContext();
export const PracticeProvider = ({children}) => {
  const [value, setValue] = React.useState(1);
  const [value1, setValue1] = React.useState(3);
  return (
    <PracticeContext.Provider value={{value, setValue, value1, setValue1}}>
      {children}
    </PracticeContext.Provider>
  );
};
//useMemo tránh trường hợp re-render không cần thiết, useMemo trả về giá trị, useCallback trả về function
//trường hợp dư thừa/trùng state, dùng useImpreHandle (có openModel, closeModel), điều khiển thông qua ref
//custom Hook
//Tính năng nào work rồi thì push lên
