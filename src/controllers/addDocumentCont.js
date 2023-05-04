import addDocumentQuery from "../database/queries/addDocumentQuery.js";

const addDocumentCont = async (req, res) => {
  try {
    const { id: user_id } = req.user;
    const { title } = req.body;
    const created_at = new Date();
    const last_opened = new Date();

    const addDoc = await addDocumentQuery(
      title,
      user_id,
      created_at,
      last_opened
    );
    res
      .status(200)
      .json({ data: addDoc.rows[0], message: "Document added successfully" });
  } catch (err) {
    res
      .status(500 || err.status)
      .json({ message: "Internal Server Error" || err.message });
  }
};

export default addDocumentCont;
