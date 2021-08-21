import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { FONTS, COLORS, RESPONSIVE, FONTSIZE } from '@util/common';

const OTPScreen = (props) => {
    return (
        <View style={{ flex: 1 }} >
            <Text>OTP Screen</Text>
            <Button title="VerifyScreen" onPress={() => props.navigation.navigate('VerifyScreen')}></Button>
        </View>
    )
}

export default OTPScreen