import connection from "../config/connection.js";

const getDocumentsQuery = (user_id) => {
  return connection.query(
    "SELECT documents.*, contents.inner_content FROM documents inner join contents on documents.id = contents.document_id WHERE documents.user_id = $1",
    [user_id]
  );
};

export default getDocumentsQuery;
