import connection from "../config/connection.js";

const updateDocumentQuery = (last_opened, id) => {
  return connection.query(
    "UPDATE documents SET last_opened = $1 WHERE id = $2 RETURNING *",
    [last_opened, id]
  );
};

export default updateDocumentQuery;
