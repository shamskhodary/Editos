import connection from "../config/connection.js";

const createUserQuery = (username, email, password, image) => {
  return connection.query(
    "INSERT INTO users (username, email, password, image) VALUES ($1, $2, $3, $4) RETURNING *",
    [username, email, password, image]
  );
};

export default createUserQuery;
