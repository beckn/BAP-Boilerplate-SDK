import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen'
import ProviderScreen from '../screens/ProviderScreen';
import ProductScreen from '../screens/ProductScreen';
import TestScreen from '../screens/TestScreen';

export default function RootNavigation() {
    const Stack = createNativeStackNavigator()
    
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ProviderScreen" component={ProviderScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ProductScreen" component={ProductScreen} options={{headerShown: false}}/>
                {/* <Stack.Screen name="TestScreen" component={TestScreen} options={{headerShown: false}}/> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}
