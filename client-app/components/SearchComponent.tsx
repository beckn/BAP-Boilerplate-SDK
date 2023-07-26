import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

const API_URL = 'http://localhost:4000/search';

const SearchComponent: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<string>('');

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          console.error('Location permission not granted.');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        const userCoordinates = `${latitude},${longitude}`;
        setUserLocation(userCoordinates);
      } catch (error) {
        console.error('Error getting user location:', error);
      }
    };

    fetchUserLocation();
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      
      const response = await axios.post(API_URL, { name, gps: userLocation });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={name}
        onChangeText={setName}
        multiline={false}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch} disabled={loading}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : null}

      {Object.keys(searchResults).length > 0 ? (
        <ScrollView style={styles.resultsContainer}>
          <Text>{JSON.stringify(searchResults, null, 2)}</Text>
        </ScrollView>
      ) : null}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50', // Green background color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff', // White text color
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    maxHeight: 200, // Set a maximum height to enable scrolling when content exceeds this height
  },
});

export default SearchComponent;
