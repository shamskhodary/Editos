import connection from "../config/connection.js";

const addDocumentQuery = (title, user_id, created_at, last_opend) => {
    return connection.query("INSERT INTO documents (title, user_id, created_at, last_opend) VALUES ($1, $2, $3, $4) RETURNING *",
     [title, user_id, created_at, last_opend]);
}

export default addDocumentQuery; 