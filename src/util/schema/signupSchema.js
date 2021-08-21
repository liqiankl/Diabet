import * as Yup from 'yup';
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
        .number()
        .label('mobile')
        .required('Mobile Number is Required'),

    ReferralCode: Yup
        .number()
        .label('Referralcode'),
})