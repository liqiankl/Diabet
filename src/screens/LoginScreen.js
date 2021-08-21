import React, { Component } from 'react'
import { Button } from 'react-native';
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FONTS, COLORS, RESPONSIVE, FONTSIZE } from '../util/common'

const LoginScreen = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'green' }} >
            <Text>LoginScreen</Text>
            <Button title="OTPScreen" onPress={() => props.navigation.navigate('OTPScreen')}></Button>
            <Button title="Register" onPress={() => props.navigation.navigate('SignupScreen')}></Button>
        </View>
    )
}

export default LoginScreen