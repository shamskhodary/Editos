import connection from '../config/connection.js';

const creatUserquery = (username, email, password) => {

    return connection.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);

};

export default creatUserquery;