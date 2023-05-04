import connection from "../config/connection.js";

const deleteDocumentQuery = (id) => {
    return connection.query("DELETE FROM documents WHERE id = $1", [id]);
}

export default deleteDocumentQuery;