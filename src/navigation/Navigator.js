import React from 'react';
import { View } from 'react-native'
import AuthNavigation from './AuthNavigation'
import HomeNavigator from './HomeNavigation';
const RootNavigator = () => {
    const isLoggnied = true
    return (
        <View style={{ flex: 1, backgroundColor: 'green' }} >
            {!isLoggnied ?
                <AuthNavigation /> :
                <HomeNavigator />}
        </View>
    )

}

export default RootNavigator