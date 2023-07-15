import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Appbar, Card, Button } from 'react-native-paper';

const ProductsScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const productsData = [
    { id: '1', name: 'Product 1', price: 10 },
    { id: '2', name: 'Product 2', price: 20 },
    { id: '3', name: 'Product 3', price: 15 },
    { id: '4', name: 'Product 4', price: 25 },
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const renderProductItem = ({ item }) => (
    <Card style={styles.productCard}>
      <Card.Content>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>$ {item.price}</Text>
      </Card.Content>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.addButtonLabel}>+</Text>
      </TouchableOpacity>
    </Card>
  );

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const viewCart = () => {
    // Implement navigation to the cart screen
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="E-Commerce App" titleStyle={styles.title} />
      </Appbar.Header>

      <Text style={styles.pageTitle}>Products under Provider 1</Text>

      <FlatList
        data={productsData}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        style={styles.productList}
      />

      <View style={styles.cartContainer}>
        <Text style={styles.cartTotal}>Total: $ {getTotalAmount()}</Text>
        <Button
          mode="contained"
          onPress={viewCart}
          disabled={cartItems.length === 0}
        >
          View Cart
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
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#073762',
  },
  productList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  productCard: {
    marginBottom: 20,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    marginTop: 5,
  },
  addButton: {
    backgroundColor: 'orange',
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartContainer: {
    backgroundColor: 'orange',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProductsScreen;
