import validateSignup from '../validation/validateSignup.js';
import { hash } from 'bcrypt';
import creatUserquery from '../database/queries/createUserQuery.js';
import tokenGen from '../middlewares/tokenGen.js';


const signupCont = async (req, res) => {

    try {
        const { username, password, email } = req.body;
        await validateSignup.validate({ username, password, email });
        const hashedPassword = await hash(password, 10);
        const user = await creatUserquery(username, email, hashedPassword);
        const { username: name, id } = user.rows[0]
        const token = await tokenGen({
            name,
            id
        })
        res.cookie("tokie", token).status(201).json({ user: { ...user.rows[0], password: "*******" }, message: "User created" });
    } catch (err) {
        if (err.name === "ValidationError") {
            res.status(401).json({ err: err.errors })
        } else if (err.message === `duplicate key value violates unique constraint "users_email_key"`) {
            res.status(401).json({ message: "email is taken habibi" })
        } else if (err.message === `duplicate key value violates unique constraint "users_username_key"`) {
            res.status(401).json({ message: "username is taken ro7i" })
        } else {
            res.status(500 || err.status).json({ message: "server error" || err.message })
        }
        
    }

}


export default signupCont;