import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { COLORS } from '@util/common'
const DiabetButton = ({ title, loading, onPress }) => {
    return (
        <Button
            title={title}
            loading={loading}
            containerStyle={style.container}
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