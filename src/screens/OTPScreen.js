import React, { Component, Fragment } from 'react'
import { View, Text, Button, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { FONTS, COLORS, RESPONSIVE, FONTSIZE } from '@util/common';
import DiabetButton from '../components/DiabetButton'
import DiabetError from '../components/DiabetError'
import { Formik } from 'formik';
import { otpSchema } from '../util/schema/otpSchema'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OTPScreen = (props) => {
    const handleFormSubmit = (values, action) => {
        props.navigation.navigate('VerifyScreen')
    }
    return (
        <KeyboardAvoidingView style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20
        }}>
            <Text style={style.textStyle}>OTP</Text>
            <Formik
                validationSchema={otpSchema}
                initialValues={{
                    otp: ''
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
                    console.log(values, "touched", touched, "errors", errors)
                    return (
                        <Fragment>
                            <OTPInputView
                                style={{ width: '80%', height: 200, fontColor: "black" }}
                                pinCount={4}
                                onCodeChanged={handleChange('otp')}
                                keyboardType="numeric"
                                autoFocusOnLoad
                                codeInputFieldStyle={style.underlineStyleBase}
                                codeInputHighlightStyle={style.underlineStyleHighLighted}
                            />
                            <DiabetError errorValue={touched.otp && errors.otp} />
                            <DiabetButton
                                title="Submit"
                                onPress={handleSubmit}
                            />
                        </Fragment>
                    )
                }
                }

            </Formik>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    textStyle: {
        fontFamily: FONTS.semibold,
        fontSize: FONTSIZE.h2
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: COLORS.borderColor,
    },

    underlineStyleBase: {
        width: 50,
        marginLeft: 20,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        color: COLORS.black,
    },
    underlineStyleHighLighted: {
        borderColor: COLORS.borderColor,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        color: COLORS.black,

    },
})


export default OTPScreen