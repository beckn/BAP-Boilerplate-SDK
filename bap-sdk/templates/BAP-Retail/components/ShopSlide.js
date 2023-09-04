import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';


const ProductCard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                ProductCard
            </Text>
        </SafeAreaView>
    );
}

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    }
})