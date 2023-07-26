import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchComponent from './components/SearchComponent';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
