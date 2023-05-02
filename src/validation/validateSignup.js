import yup from 'yup';


const validateSignup = yup.object().shape({
    email: yup.string().email("This email is a stranger").required(),
    username: yup.string().required(),
    password: yup.string().min(3, "Password is too short")
                          .max(25, "Password too long").required(),
});


export default validateSignup;
