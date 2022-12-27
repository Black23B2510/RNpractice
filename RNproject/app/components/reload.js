import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const getItems = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Kiwi'];
};

const Item = ({name}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};

const LoadingAnimation = () => {
  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator size="large" style={styles.indicator} />
      <Text style={styles.indicatorText}>Loading fruits...</Text>
    </View>
  );
};

const Reload = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems().then(items => {
      setItems(items);
      setLoading(false);
    });
  }, []);

  const renderItem = ({item}) => <Item name={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <FlatList data={items} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#888',
    padding: 12,
    marginBottom: 12,
    marginLeft: 8,
    marginRight: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 24,
  },
  indicatorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {},
  indicatorText: {
    fontSize: 18,
    marginTop: 12,
  },
});

export default Reload;
