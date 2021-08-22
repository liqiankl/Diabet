import React, { Component, Fragment } from 'react'
import { Button } from 'react-native';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FONTS, COLORS, RESPONSIVE, FONTSIZE } from '../util/common'
import DiabetInput from '../components/DiabetInput'
import DiabetButton from '../components/DiabetButton'
import DiabetError from '../components/DiabetError'
import { Formik } from 'formik';
import { loginSchema } from '@util/schema/loginSchema'

const LoginScreen = (props) => {
    const handleFormSubmit = (values, action) => {
        console.log(values, action, "values, action")
        props.navigation.navigate('OTPScreen')
    }
    return (
        <KeyboardAvoidingView style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20
        }}>
            <Formik
                validationSchema={loginSchema}
                initialValues={{
                    mobile: ''
                }}
                enableReinitialize={true}
                onSubmit={handleFormSubmit}
            >
                {({
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    values,
                    errors,
                    touched,
                    handleBlur,
                }) => {
                    console.log(errors, touched, values)
                    return (
                        <Fragment>
                            <DiabetInput
                                placeholder={"Enter mobile number"}
                                onChangeText={handleChange('mobile')}
                                name="mobile"
                                keyboardType="numeric"
                                error={touched.mobile && errors.mobile}
                            />
                            <DiabetButton
                                title="Submit"
                                onPress={handleSubmit}
                                screen={'otp'}
                            />
                        </Fragment>
                    )
                }
                }

            </Formik>
            <View style={style.container}>
                <Text style={style.text}
                    onPress={() => props.navigation.navigate('SignupScreen')}
                >Register now ?</Text>
            </View>
        </KeyboardAvoidingView>
    )
}


const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 120
    },
    text: {
        color: COLORS.black,
        fontSize: FONTSIZE.h5,
        fontFamily: FONTS.regular
    }
})
export default LoginScreen