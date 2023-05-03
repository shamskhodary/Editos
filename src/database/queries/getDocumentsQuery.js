import connection from "../config/connection.js";

const getDocumentsQuery = () => {
    return connection.query('SELECT * FROM documents')
}

export default getDocumentsQuery;