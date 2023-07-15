import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Appbar, Card } from 'react-native-paper';

const OrderDetailsScreen = () => {
  const orderInfo = {
    orderId: '1234',
    placedAt: 'June 11, 2023',
    status: 'Delivered',
  };

  const fulfillmentInfo = {
    providerName: 'Provider 1',
    trackingStatus: 'In Transit',
  };

  const statusTicks = [
    { label: 'Item Packed', completed: true },
    { label: 'Delivery Agent Assigned', completed: true },
    { label: 'In Transit', completed: true },
    { label: 'Delivered', completed: false },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="E-Commerce App" titleStyle={styles.title} />
      </Appbar.Header>

      <Text style={styles.pageTitle}>Order Details</Text>

      <View style={styles.orderContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Order Information</Text>
            <View style={styles.orderDetails}>
              <Text style={styles.label}>Order ID:</Text>
              <Text style={styles.value}>{orderInfo.orderId}</Text>
            </View>
            <View style={styles.orderDetails}>
              <Text style={styles.label}>Placed at:</Text>
              <Text style={styles.value}>{orderInfo.placedAt}</Text>
            </View>
            <View style={styles.orderDetails}>
              <Text style={styles.label}>Status:</Text>
              <Text style={styles.value}>{orderInfo.status}</Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Fulfillment Information</Text>
            <View style={styles.orderDetails}>
              <Text style={styles.label}>Provider:</Text>
              <Text style={styles.value}>{fulfillmentInfo.providerName}</Text>
            </View>
            <View style={styles.orderDetails}>
              <Text style={styles.label}>Tracking Status:</Text>
              <Text style={styles.value}>{fulfillmentInfo.trackingStatus}</Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Order Status</Text>
            {statusTicks.map((tick, index) => (
              <View key={index} style={styles.statusTick}>
                <Text style={styles.tickLabel}>{tick.label}</Text>
                <View
                  style={[
                    styles.tickIcon,
                    { backgroundColor: tick.completed ? 'green' : 'gray' },
                  ]}
                />
              </View>
            ))}
          </Card.Content>
        </Card>
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
  orderContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 20,
    elevation: 2,
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'orange',
  },
  orderDetails: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    flex: 1,
    fontSize: 16,
  },
  statusTick: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  tickLabel: {
    flex: 1,
    fontSize: 16,
  },
  tickIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#073762',
  },
});

export default OrderDetailsScreen;
