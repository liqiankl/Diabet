import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator'
import { useWindowDimensions } from 'react-native';
import CutomeDrawerComponent from './CutomeDrawerComponent'
import { RESPONSIVE } from '@util/common'
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const dimension = useWindowDimensions();
    console.log(dimension)
    const isLargeScreen = dimension.width >= 768;
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    width: RESPONSIVE.scale(200),
                    drawerType: isLargeScreen ? 'permanent' : 'back',
                    drawerStyle: isLargeScreen ? null : { width: '100%' },
                    overlayColor: 'transparent',
                }
            }}

            drawerContent={(props) => <CutomeDrawerComponent {...props} />}


        >
            <Drawer.Screen
                initialRouteName="Home"
                name="Home"
                component={HomeStackNavigator}
                options={{ headerShown: false }}
            />

        </Drawer.Navigator>
    )

}
export default DrawerNavigator