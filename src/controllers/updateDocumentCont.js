import updateDocumentQuery from "../database/queries/updateDocumentQuery.js";

const updateDocumentCont = async (req, res) => {
  try {
    const { id } = req.params;
    const opened_at = new Date();

    const updatedDoc = await updateDocumentQuery(opened_at, id);
    res.status(200).json(updatedDoc.rows[0]);
  } catch (err) {
    res
      .status(500 || err.status)
      .json({ message: "Internal Server Error" || err.message });
  }
};

export default updateDocumentCont;
