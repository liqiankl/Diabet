import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

const SignupScreen = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }} >
            <Text>SignupScreen</Text>
            <Button title="Login" onPress={() => props.navigation.goBack()}></Button>
        </View>
    )
}

export default SignupScreen