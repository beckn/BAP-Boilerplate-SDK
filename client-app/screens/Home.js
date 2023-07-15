import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Search:', searchText);
  };

  const handleSetLocation = () => {
    // Handle setting the user's location here
    console.log('Set Location');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="  E-Commerce App" titleStyle={styles.title} />
      </Appbar.Header>

      <View style={styles.locationContainer}>
        <Icon name="map-marker" size={20} color="orange" style={styles.locationIcon} />
        <Button
          mode="outlined"
          style={styles.locationButton}
          onPress={handleSetLocation}
        >
          Set Location
        </Button>
        <Button
          icon="dots-vertical"
          color="gray"
          onPress={() => console.log('Options')}
        />
      </View>

      <Text style={styles.title1}>Open Commerce for all</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <Button
          mode="contained"
          style={styles.searchButton}
          icon="magnify"
          onPress={handleSearch}
        >
          Search
        </Button>
      </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 90,
    borderRadius: 20,
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: 'orange',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 40,
    marginLeft: 100

  },
  locationIcon: {
    marginRight: 10,
  },
  locationButton: {
    borderColor: 'orange',
    borderWidth: 1,
    marginRight: 10,
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#073762',
    marginTop: 30,
    marginTop: 90,
  },
});

export default Home;
