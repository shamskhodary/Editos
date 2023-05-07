import connection from "../config/connection.js";

const addContentQuery = (inner_content, document_id) => {
    return connection.query(`INSERT INTO contents (inner_content, document_id) VALUES ($1, $2) RETURNING *;`, [inner_content, document_id])
}


export default addContentQuery;