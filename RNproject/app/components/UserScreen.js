import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, RefreshControl} from 'react-native';
import Header from './Header';
import UserCard from '../components/UserCard';
import {litsUsers} from '../data/Users';

const UserScreen = () => {
  const [data, setData] = useState(litsUsers);
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.message}>No data found</Text>
      </View>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={Header}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={styles.container}
      stickyHeaderIndices={[0]}
      keyExtractor={item => item.id}
      data={data}
      renderItem={({item}) => {
        return <UserCard item={item} />;
      }}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            setData(litsUsers);
          }}
        />
      }
    />
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
