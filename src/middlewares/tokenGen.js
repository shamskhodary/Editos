import jwt from "jsonwebtoken";
const { SECRET_KEY } = process.env;


const tokenGen = (payload) => new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, (err, decode) => {
        if (err) {
            reject(err)
        } else {
            resolve(decode)
        }
    })
    
})


export default tokenGen