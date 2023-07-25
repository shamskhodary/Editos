import connection from "../config/connection.js";

const updateContentQuery = (inner_content, document_id) => {
  return connection.query(
    `update contents set inner_content = $1 where document_id = $2 returning *`,
    [inner_content, document_id]
  );
};

export default updateContentQuery;
