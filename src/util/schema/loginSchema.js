import * as Yup from 'yup';
export const loginSchema = Yup.object().shape({
    mobile: Yup.
        number().
        label('mobile').
        required('Please enter mobile number'),
})