import connection from '../config/connection.js';

const findUserQuery = (email) => {

    return connection.query('SELECT * FROM users WHERE email = $1', [email]);

};


export default findUserQuery;