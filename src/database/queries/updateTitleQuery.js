import connection from "../config/connection.js";

const updateTitleQuery = (title, id) => {
  return connection.query(
    "UPDATE documents SET title = $1 WHERE id = $2 RETURNING *",
    [title, id]
  );
};

export default updateTitleQuery;
