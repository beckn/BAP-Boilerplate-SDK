import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen'
import ProviderScreen from '../screens/ProviderScreen';

export default function RootNavigation() {
    const Stack = createNativeStackNavigator()
    
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ProviderScreen" component={ProviderScreen} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
