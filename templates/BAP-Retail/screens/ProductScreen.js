import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ActivityIndicator, View } from 'react-native';
import beckn from '../beckn.config';


const ProductScreen = ({route}) => {
    const {context, id, location} = route.params;

    const [result, setResult] = useState([{}]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCatalog = async() => {

            try{
                setLoading(true);
          
                const  data  = await beckn.searchCatalog(context.bpp_id, context.bpp_uri, id, location);
                console.log('\n\nFrontend in Products: ', data);
          
                setLoading(false);
                setResult(data);
          
            }catch (error) {
                console.error(error);
                setLoading(false); 
            }
        }

        console.log("\ncontext : ", context, " id :  ", id, " gps : ", location);
        getCatalog();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {!loading && result ? (
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>{JSON.stringify(result[0], null, 2)}</Text>
                </View>
            ):
                (<ActivityIndicator size="large" color="rgba(220,105,32,1)" /> )
            }
        </SafeAreaView>
    );
}

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 100,
    },
    resultBox: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    resultText: {
        fontSize: 14,
        fontFamily: 'Arial', // Use the appropriate font family
        color: '#333',
    },
})