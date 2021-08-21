import React from 'react'
import { StyleSheet } from 'react-native'
import { Input } from 'react-native-elements';

const DiabetInput = ({ placeholder, label, onChangeText, keyboardType }) => {
    return (
        <Input
            placeholder={placeholder}
            label={label}
            style={style.continer}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
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
        borderRadius: 5
    }
})

export default DiabetInput;

