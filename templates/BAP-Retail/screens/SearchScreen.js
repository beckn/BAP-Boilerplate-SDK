import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, Dimensions, TouchableOpacity, TextInput, ActivityIndicator} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import beckn from "../beckn.config";

const SearchScreen = () => {

  const navigation = useNavigation();

  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSelectLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      setSelectedLocation(`Mumbai`);
      setLat(latitude);
      setLong(longitude);

    }catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async() => {
    const gps = `${lat}, ${long}`

    try{
      setLoading(true);

      const  data  = await beckn.searchProviders(search, gps);
      console.log('\nFrontend: ', data);

      setLoading(false);
      setSearch("");
      navigation.navigate("ProviderScreen", { searchResult: data, lat, long }); 

    }catch (error) {
      console.error(error);
      setLoading(false); 
    }
     

  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.locationBar}>

        <View style={styles.location}>
          <Entypo name="location-pin" size={30} color="orange" />
        </View>

        <TouchableOpacity style={styles.selectLocation} onPress={handleSelectLocation}>
          <Text>{selectedLocation}</Text>
          <AntDesign name="down" size={16} color="black" />
        </TouchableOpacity>
        
      </View>

      <View style={styles.searchContainer}>

        <View>
          <Text style={styles.orangeTxt}>Open</Text>
          <Text style={styles.orangeTxt}>Commerce</Text>
          <Text style={styles.blackTxt}>for All</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            A global marketplace to discover and buy anything you need. Just
            type what you want to buy and we will take care of the rest.
          </Text>
        </View>

        <View style={styles.searchBox}>
          <FontAwesome
            name="search"
            size={24}
            color="black"
            style={{ flex: 1 }}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Enter Something"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>

      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text>Search</Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator size="large" color="rgba(220,105,32,1)" />
      )}

    </SafeAreaView>
  );
};

export default SearchScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)",
    alignItems: "center",
  },

  locationBar: {
    backgroundColor: "white",
    marginTop: Dimensions.get("window").height / 24,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    elevation: 10,
  },

  location: {
    display: "flex",
    backgroundColor: "rgba(220,105,32,0.2)",
    borderRadius: 50,
    minWidth: "10%",
    alignContent: "center",
    justifyContent: "center",
    padding: 5,
  },
  
  selectLocation: {
    paddingLeft: 20,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: Dimensions.get("window").height / 14,
  },
  orangeTxt: {
    color: "rgba(220,105,32,1)",
    fontWeight: "bold",
    fontSize: 50,
  },
  blackTxt: {
    fontWeight: "bold",
    fontSize: 25,
  },
  info: {
    color: "rgba(0,0,0,0.3)",
    letterSpacing: 1,
    paddingVertical: 20,
  },
  searchBox: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    padding: 15,
    gap: 20,
    elevation: 20,
    borderRadius: 10,
  },
  searchInput: {
    flex: 10,
  },
  button:{
    backgroundColor:'rgba(220,105,32,1)',
    color:'white',
    paddingHorizontal:20,
    paddingVertical:10,
    marginTop:30,
    borderRadius: 10,
    marginBottom: 20,
  }
});
