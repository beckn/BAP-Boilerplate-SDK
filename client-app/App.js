import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/Home'
import BPP from './screens/BPP';
import Catalog from './screens/Catalog'
import OrderDetails from './screens/OrderDetails'

export default function App() {
  return (
    <SafeAreaProvider>
      <OrderDetails />
    </SafeAreaProvider>
  );
}

