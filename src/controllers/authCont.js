import getUserByIdQuery from "../database/queries/getUserByIdQuery.js";

const authCont = async (req, res) => {
  const { id } = req.user;
  try {
    const userData = await getUserByIdQuery(id);
    if (userData.rows[0]) {
      res.status(200).json({ data: { ...userData.rows[0], password: "" } });
    }
  } catch (err) {
    res
      .status(500 || err.status)
      .json({ message: "unauthorized" || err.message });
  }
};

export default authCont;
