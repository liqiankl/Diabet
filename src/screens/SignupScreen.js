import React, { Component, Fragment } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import DiabetButton from '../components/DiabetButton'
import DiabetInput from '../components/DiabetInput'
import { COLORS, FONTS, FONTSIZE } from '../util/common/index'
import { Formik } from 'formik';
import { signUpSchema } from '../util/schema/signupSchema'
import DiabetError from '../components/DiabetError'


const SignupScreen = (props) => {
    return (
        <Fragment >
            <View style={styles.container}>
                <View style={styles.SignUpHeader}>
                    <Entypo name="cross" size={30} color="#E8E8E8" />
                    <Text
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: FONTSIZE.h2
                        }}
                    >SignUp</Text>
                    <Text
                        style={{
                            color: COLORS.primary,
                            fontFamily: FONTS.medium,
                            fontSize: FONTSIZE.h5
                        }}
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
                    onSubmit={(values) => console.log(
                        values
                    )}
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
                                <View style={styles.SignUpMain}>
                                    <DiabetInput
                                        placeholder={"Name"}
                                        keyboardType="default"
                                        values={values.name}
                                        name="name"
                                        onChangeText={handleChange('name')}
                                    />
                                    <DiabetError errorValue={touched.name && errors.name} />
                                    <DiabetInput
                                        placeholder={"Email"}
                                        keyboardType="email-address"
                                        values={values.email}
                                        name="email"
                                        onChangeText={handleChange('email')}
                                    />
                                    <DiabetError errorValue={touched.email && errors.email} />
                                    <DiabetInput
                                        placeholder={"Mobile number"}
                                        keyboardType="phone-pad"
                                        values={values.mobile}
                                        name="mobile"
                                        onChangeText={handleChange('mobile')}
                                    />
                                    <DiabetError errorValue={touched.mobile && errors.mobile} />
                                    <DiabetInput
                                        placeholder={"Referral Code (optional)"}
                                        keyboardType="numeric"
                                        values={values.RefeeralCode}
                                        name="RefeeralCode"
                                        onChangeText={handleChange('RefeeralCode')}
                                    />
                                    <DiabetError errorValue={touched.RefeeralCode && errors.RefeeralCode} />
                                </View>
                                <View style={styles.SignUpBottom}>
                                    <DiabetButton
                                        title="Sign Up"
                                        onPress={handleSubmit}
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
        alignItems: 'center',
        padding: 10
    },
})


export default SignupScreen