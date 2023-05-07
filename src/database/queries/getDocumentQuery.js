import connection from "../config/connection.js";

const getDocumentQuery = (id) => {
    return connection.query(`select documents.*, string_agg(contents.inner_content, ' ') as all_contents from documents inner join contents on contents.document_id = documents.id where documents.id = $1 group by documents.id;`, [id])
}

export default getDocumentQuery;