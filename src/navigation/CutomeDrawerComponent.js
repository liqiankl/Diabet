import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { COLORS } from '@util/common'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


const CustomDrawerContent = (props) => {
    return (
        <View style={style.container}>
            <DrawerContentScrollView>

            </DrawerContentScrollView>
            <Button title="Logout"
                onPress={() => props.navigation.navigate('Auth')}
            ></Button>
        </View>
    )

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    }

})


export default CustomDrawerContent;