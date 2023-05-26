import { OAuth2Client } from "google-auth-library";
import { v4 as uuidv4 } from "uuid";
import tokenGen from "../middlewares/tokenGen.js";
import signUserQuery from "../database/queries/signUserQuery.js";
import createUserQuery from "../database/queries/createUserQuery.js";

const googleOAuth = async (req, res) => {
  const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const user = await signUserQuery(payload.email);

    if (user.rows[0]) {
      const token = await tokenGen({
        id: user.rows[0].id,
        username: user.rows[0].username,
      });

      res
        .cookie("tokie", token)
        .status(201)
        .json({ message: "user logged in successfully", user: user.rows[0] });
    } else {
      const pass = uuidv4();
      const created = await createUserQuery(
        payload.name,
        payload.email,
        pass,
        payload.picture
      );
      const token = await tokenGen({
        id: created.rows[0].id,
        username: created.rows[0].username,
      });

      res.cookie("tokie", token).status(201).json({
        message: "user logged in successfully",
        user: created.rows[0],
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default googleOAuth;
