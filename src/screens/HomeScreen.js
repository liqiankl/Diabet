import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Input } from 'react-native-elements';
import { FONTS, COLORS, RESPONSIVE, FONTSIZE } from '@util/common';
import { Button } from 'react-native';
import ToastMessage from '../components/ToastMessage'

const HomeScreen = (props, navigation) => {
    return (
        <View style={{ flex: 1 }} >
            <Text>HomeScreen</Text>
            {/* <Button title="Detail" onPress={() => props.navigation.navigate('SubscriptionDetail')}> </Button> */}

            <Button title="Toast" onPress={() => {
                ToastMessage('success', "JAS DEMO", "This react native")
            }}> </Button>
           

           <Button title="SubscriptionDetail" onPress={() => props.navigation.push("SubscriptionDetail")} />

        </View>
    )
}

export default HomeScreen