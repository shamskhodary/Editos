import connection from "../config/connection.js";

const getUserByIdQuery = (id) => {
  return connection.query("SELECT * from users where id = $1", [id]);
};

export default getUserByIdQuery;
