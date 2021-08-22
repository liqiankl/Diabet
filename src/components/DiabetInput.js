import React from 'react'
import { StyleSheet } from 'react-native'
import { Input } from 'react-native-elements';

const DiabetInput = ({
    placeholder,
    label,
    onChangeText,
    keyboardType,
    autoCapitalize,
    error }) => {
    return (
        <Input
            placeholder={placeholder}
            label={label}
            style={style.continer}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            errorMessage={error}
            autoCapitalize={autoCapitalize}
        />
    )

}
const style = StyleSheet.create({
    continer: {
        height: 60,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: "#F6F6F6",
        borderRadius: 5,
        marginBottom: 3
    }
})

export default DiabetInput;

