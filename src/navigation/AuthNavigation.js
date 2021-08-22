import React from 'react';
import { View } from 'react-native'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen';
import OTPScreen from '../screens/OTPScreen';
import VerifyScreen from '../screens/VerifyScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="OTPScreen"
                component={OTPScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerifyScreen"
                component={VerifyScreen}
                options={{ headerShown: false }}

            />

        </Stack.Navigator>
    )

}

export default AuthNavigation;