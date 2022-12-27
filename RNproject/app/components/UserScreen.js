import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {litsUsers} from '../data/Users';
import PopupModal from './popupModal';
const UserScreen = () => {
  const [data, setData] = useState(litsUsers);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const onDelete = () => {
    setModalVisible(true);
  };
  const Header = () => {
    return (
      <View style={styles.topTitle}>
        <Text style={styles.title}>Friend requests</Text>
        <TouchableOpacity style={styles.btn} onPress={StartLoading}>
          <Text style={styles.txtbt}>See all</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const StartLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
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
            <TouchableOpacity style={styles.btn} onPress={() => onDelete()}>
              <PopupModal modelVisible={modalVisible} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  useEffect(() => {
    setData(litsUsers);
  }, []);
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.message}>No data found</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.centeredView}>
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
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
          // refreshControl={
          //   <RefreshControl
          //     refreshing={false}
          //     onRefresh={() => {
          //       setData(litsUsers);
          //     }}
          //   />
          // }
        />
      )}
    </SafeAreaView>
  );
};

export default UserScreen;

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
  txtbt: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
  txtDelete: {
    textAlign: 'center',
    color: 'black',
    padding: 10,
  },
  tcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  popupBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
