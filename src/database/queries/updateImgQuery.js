import connection from "../config/connection.js";

const updateImgQuery = (image_url, id) => {
  return connection.query(
    "UPDATE users SET image_url = $1 WHERE id = $2 RETURNING *",
    [image_url, id]
  );
};

export default updateImgQuery;
