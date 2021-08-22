import * as Yup from 'yup';
export const otpSchema = Yup.object().shape({
    otp: Yup.
        number()
        .label('otp')
        .required('Please enter otp')


})