import jwt from "jsonwebtoken";
const { SECRET_KEY } = process.env;


const verifyUser = (req, res, next) => {
    const { tokie } = req.cookies;
    if (!tokie) {
        res.status(401).json({ message: 'You are not logged in' });
    } else {
        jwt.verify(tokie, SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Invalid token' });
            } else {
                req.user = decoded;
                next();
            }
        });
    }
};


export default verifyUser;  