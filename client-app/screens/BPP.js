import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { Appbar, Avatar, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BusinessProvidersScreen = () => {
  const data = [
    { id: '1', name: 'Provider 1', image: require('../assets/provider.jpeg') },
    { id: '2', name: 'Provider 2', image: require('../assets/provider.jpeg') },
    { id: '3', name: 'Provider 3', image: require('../assets/provider.jpeg') },
    { id: '4', name: 'Provider 4', image: require('../assets/provider.jpeg') },
    { id: '5', name: 'Provider 4', image: require('../assets/provider.jpeg') },
  ];

  const renderItem = ({ item }) => (
    <List.Item
      title={item.name}
      left={props => (
        <Avatar.Image
          {...props}
          source={item.image}
          size={48}
          style={styles.providerAvatar}
        />
      )}
    />
  );

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="   E-Commerce App" titleStyle={styles.title} />
      </Appbar.Header>

      <Text style={styles.pageTitle}>Business Providers</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appbar: {
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: -15,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
    marginTop: 20,
    color: '#073762',
  },
  list: {
    marginTop: 20,
    marginLeft: 40
  },
  providerAvatar: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'orange',
  },
});

export default BusinessProvidersScreen;
