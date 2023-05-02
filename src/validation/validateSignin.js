import yup from 'yup';


const validateSignin = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});


export default validateSignin;
