import connection from "../config/connection.js";

const getDocByIdQuery = (id) => {
  return connection.query(`select * from documents where id = $1`, [id]);
};

export default getDocByIdQuery;
