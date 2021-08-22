import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SubscriptionDetail from '../screens/SubscriptionDetail'
import PaymentScreen from '../screens/PaymentScreen'
import AddressScreen from '../screens/AddressScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SubscriptionDetail"
                component={SubscriptionDetail}
            />
            <Stack.Screen
                name="PaymentScreen"
                component={PaymentScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddressScreen"
                component={AddressScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )

}

export default HomeStackNavigator;