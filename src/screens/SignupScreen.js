import React, { Component, Fragment } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import DiabetButton from '../components/DiabetButton'
import DiabetInput from '../components/DiabetInput'
import { COLORS, FONTS, FONTSIZE } from '../util/common/index'
import { Formik } from 'formik';
import { signUpSchema } from '../util/schema/signupSchema'
import DiabetError from '../components/DiabetError'
import ApiServices from '../util/api/services'


const SignupScreen = (props) => {
    const handleFormSubmit = (values, { setSubmitting }) => {
        let body = {
            "mobile": {
                "code": "+91",
                "number": values.mobile
            },
            "name": values.name,
            "email": values.email,
            "role": "patient"
        }
        if (values.RefeeralCode) {
            body.referralCode = values.RefeeralCode
        }
        ApiServices.createAccount(body)
            .then(res => {
                setSubmitting(false)
            }).catch(err => {
                setSubmitting(false)
            })

    }
    return (
        <Fragment >
            <View style={styles.container}>
                <View style={styles.SignUpHeader}>
                    <Entypo
                        name="cross"
                        size={30}
                        onPress={() => props.navigation.goBack()}
                        color="#E8E8E8" />
                    <Text
                        style={styles.header}
                    >SignUp</Text>
                    <Text
                        style={styles.textStyle}
                        onPress={() => props.navigation.goBack()}
                    >Login</Text>
                </View>
                <View style={{ width: '40%' }} />
                <Formik
                    validationSchema={signUpSchema}
                    initialValues={{
                        name: '',
                        email: '',
                        mobile: '',
                        RefeeralCode: '',
                    }}
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
                        return (
                            <Fragment>
                                <View style={styles.SignUpMain}>
                                    <DiabetInput
                                        placeholder={"Name"}
                                        keyboardType="default"
                                        values={values.name}
                                        name="name"
                                        onChangeText={handleChange('name')}
                                        error={touched.name && errors.name}
                                    />
                                    <DiabetInput
                                        placeholder={"Email"}
                                        keyboardType="email-address"
                                        values={values.email}
                                        name="email"
                                        autoCapitalize={'none'}
                                        onChangeText={handleChange('email')}
                                        error={touched.email && errors.email}
                                    />
                                    <DiabetInput
                                        placeholder={"Mobile number"}
                                        keyboardType="phone-pad"
                                        values={values.mobile}
                                        name="mobile"
                                        onChangeText={handleChange('mobile')}
                                        error={touched.mobile && errors.mobile}
                                    />
                                    <DiabetInput
                                        placeholder={"Referral Code (optional)"}
                                        keyboardType="numeric"
                                        values={values.RefeeralCode}
                                        name="RefeeralCode"
                                        onChangeText={handleChange('RefeeralCode')}
                                        error={touched.RefeeralCode && errors.RefeeralCode}
                                    />
                                </View>
                                <View style={styles.SignUpBottom}>
                                    <DiabetButton
                                        title="Sign Up"
                                        onPress={handleSubmit}
                                        loading={isSubmitting}
                                    />
                                </View>
                            </Fragment>
                        )
                    }}
                </Formik>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary
    },
    SignUpHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 20
    },
    SignUpMain: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginTop: 15
    },
    SignUpBottom: {
        padding: 10
    },
    textStyle: {
        color: COLORS.primary,
        fontFamily: FONTS.medium,
        fontSize: FONTSIZE.h5
    },
    header: {
        fontFamily: FONTS.semibold,
        fontSize: FONTSIZE.h2
    }
})


export default SignupScreen