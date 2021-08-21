import React, { Component, Fragment } from 'react'
import { Button } from 'react-native';
import { View, Text, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FONTS, COLORS, RESPONSIVE, FONTSIZE } from '../util/common'
import DiabetInput from '../components/DiabetInput'
import DiabetButton from '../components/DiabetButton'
import DiabetError from '../components/DiabetError'
import { Formik } from 'formik';
import { loginSchema } from '@util/schema/loginSchema'

const LoginScreen = (props) => {
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
                            <DiabetInput
                                placeholder={"Enter mobile number"}
                                onChangeText={handleChange('mobile')}
                                name="mobile"
                                keyboardType="numeric"
                            />
                            <DiabetError errorValue={touched.mobile && errors.mobile} />
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

export default LoginScreen