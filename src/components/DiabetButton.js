import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { COLORS } from '@util/common'
const DiabetButton = ({ title, loading, onPress, screen }) => {
    return (
        <Button
            title={title}
            loading={loading}
            buttonStyle={style.container}
            onPress={onPress}
        />
    )

}
const style = StyleSheet.create({
    container: {
        width: '98%',
        height: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        borderRadius: 28
    }
})


export default DiabetButton