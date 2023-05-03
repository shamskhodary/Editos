import connection from "../config/connection.js";

const addDocumentQuery = (title, user_id) => {
    return connection.query("INSERT INTO documents (title, user_id) VALUES ($1, $2) RETURNING *", [title, user_id]);
}

export default addDocumentQuery;