import connection from "../config/connection.js";

const getDocumentQuery = (id) => {
    return connection.query('SELECT * FROM documents WHERE id = $1', [id])
}

export default getDocumentQuery;