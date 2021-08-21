import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Navigator';

const Navigator = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )

}
export default Navigator;