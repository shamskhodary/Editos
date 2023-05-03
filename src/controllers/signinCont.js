import { compare } from 'bcrypt'
import tokenGen from '../middlewares/tokenGen.js'
import signUserQuery from '../database/queries/signUserQuery.js'



const signinCont = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await signUserQuery(email)
        if (user.rows.length === 0) {
            res.status(401).json({ message: 'Invalid email or password' })
        } else {
            const { id, username, email, password: hashedPassword } = user.rows[0]
            const isMatch = await compare(password, hashedPassword)
            if (!isMatch) {
                res.status(401).json({ message: 'Invalid email or password' })
            } else {
                const token = await tokenGen({ id, username })
                res.cookie('tokie', token)
                    .status(200).json({ message: 'User logged in', user: { id, username, email } })
            }
        }
    } catch (err) {
        res.status(500 || err.status).json({ message: 'Server error' || err.message })
    }
}

export default signinCont