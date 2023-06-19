import updateTitleQuery from "../database/queries/updateTitleQuery.js";

const updateTitleCont = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const updated = await updateTitleQuery(title, id);
    res.status(200).json(updated.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updateTitleCont;
