import getDocumentQuery from "../database/queries/getDocumentQuery.js";

const getDocumentCont = async (req, res) => {
  try {
    const { id } = req.params;
    const getDocument = await getDocumentQuery(id);
    res.status(200).json(getDocument.rows);
  } catch (err) {
    res
      .status(500 || err.status)
      .json({ message: "Server error" || err.message });
  }
};

export default getDocumentCont;
