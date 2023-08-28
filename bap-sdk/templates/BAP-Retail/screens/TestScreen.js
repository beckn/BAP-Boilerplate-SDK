import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import beckn from '../beckn.config';


const TestScreen = () => {
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);

  const handleSearch = async () => {
    try {
      setData(false);
      setLoading(true);
      
      const  data  = await beckn.searchItems(name, 2);
      console.log('\nFrontend: ', data);

      setSearchResults(data);

    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
      setData(true);
      setName('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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

      {data ? (
        <ScrollView style={styles.resultsContainer}>
          <Text>{JSON.stringify(searchResults, null, 2)}</Text>
        </ScrollView>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    marginTop: 300
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

export default TestScreen;
