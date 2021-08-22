import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text } from 'react-native'
import DiabetButton from '../components/DiabetButton';
import { COLORS, FONTS, FONTSIZE } from '@util/common'


const VerifyScreen = (props) => {
    return (
        <View style={style.container} >
            <View style={{ alignItems: 'center' }}>
                <AntDesign
                    name="smile-circle"
                    size={200}
                />
            </View>
            <Text style={style.baseText}>Success</Text>
            <DiabetButton
                title="Verify"
                onPress={() => props.navigation.navigate('Dashboard')}
            />

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    baseText: {
        fontFamily: FONTS.regular,
        fontSize: FONTS.h6,
        textAlign: 'center',
        marginVertical: 10
    }
})

export default VerifyScreen