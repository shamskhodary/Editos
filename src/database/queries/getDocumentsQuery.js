import connection from "../config/connection.js";

const getDocumentsQuery = () => {
  return connection.query(
    "SELECT documents.*, contents.inner_content FROM documents inner join contents on documents.id = contents.document_id"
  );
};

export default getDocumentsQuery;
