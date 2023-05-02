import connection from '../config/connection.js';


const signUserQuery = (email) => {

    return connection.query('SELECT * FROM users WHERE email = $1', [email]);
};

export default signUserQuery;
