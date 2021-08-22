import React from 'react';
import { View } from 'react-native'
import AuthNavigation from './AuthNavigation'
import HomeNavigator from './HomeNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const isLoggnied = false
    return (
        <View style={{ flex: 1, backgroundColor: 'green' }} >
            <Stack.Navigator
                initialRouteName="Auth"
            >
                <Stack.Screen
                    name="Auth"
                    component={AuthNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={HomeNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </View>
    )

}

export default RootNavigator