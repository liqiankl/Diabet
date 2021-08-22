import * as Yup from 'yup';
const phoneRegExp = /^([6-9]{1}[0-9]{9})$/;

export const signUpSchema = Yup.object().shape({
    name: Yup
        .string()
        .label('name')
        .required('Name is required'),

    email: Yup
        .string()
        .label('email')
        .email('Please enter valid email')
        .required('Email Address is Required'),

    mobile: Yup
        .string()
        .label('mobile')
        .min(10)
        .max(10)
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Mobile Number is Required'),

    ReferralCode: Yup
        .number()
        .label('Referralcode'),
})