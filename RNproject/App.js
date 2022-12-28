import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HookPractice from './app/components/UseState/HookPractice';
import UseMemo from './app/components/UseMemo/useMemo';
import {
  PracticeContext,
  PracticeProvider,
} from './app/components/UseContext/context';
import Counter from './app/components/UseCallback/Counter';
// const Counter = () => {
//   const {value, value1, setValue, setValue1} =
//     React.useContext(PracticeContext);
//   return (
//     <View>
//       <Text>{value}</Text>
//       <TouchableOpacity
//         onPress={() => {
//           setValue(value + 1);
//         }}>
//         <Text>Increase</Text>
//       </TouchableOpacity>
//       <UseMemo />
//     </View>
//   );
// };
const App = () => {
  return (
    <PracticeProvider>
      <Counter />
      {/* <Counter /> */}
      {/* <HookPractice /> */}
      {/* <UseMemo /> */}
    </PracticeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
