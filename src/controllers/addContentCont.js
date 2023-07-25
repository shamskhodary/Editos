import addContentQuery from "../database/queries/addContentQuery.js";
import getDocByIdQuery from "../database/queries/getDocByIdQuery.js";
import updateContentQuery from "../database/queries/updateContentQuery.js";

const addContentCont = async (req, res) => {
  try {
    const id = req.params.id;
    const { inner_content } = req.body;

    const { rowCount } = await getDocByIdQuery(id);
    if (rowCount > 0) {
      const { rows } = await updateContentQuery(inner_content, id);
      res
        .status(200)
        .json({ message: "Content updated successfully", content: rows[0] });
    } else {
      const { rows } = await addContentQuery(inner_content, id);
      res
        .status(201)
        .json({ message: "Content added successfully", content: rows[0] });
    }
  } catch (err) {
    res
      .status(500 || err.status)
      .json({ message: "Internal Server Error" || err.message });
  }
};

export default addContentCont;
