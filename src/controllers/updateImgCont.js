import updateImgQuery from "../database/queries/updateImgQuery.js";

const updateImgCont = async (req, res) => {
  const { id } = req.user;
  const { image_url } = req.body;

  try {
    const { rows } = await updateImgQuery(image_url, id);
    if (rows) {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

export default updateImgCont;
