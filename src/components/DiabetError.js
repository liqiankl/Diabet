import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiabetError = ({ errorValue }) => (
    <View style={styles.container}>
        <Text style={styles.errorText}>{errorValue}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        marginLeft: 10,
        paddingBottom: 20
    },
    errorText: {
        color: '#db4344',
        fontSize: 12
    },
});
export default DiabetError;