import express from "express";
const router = express.Router();
import signupCont from "../controllers/signupCont.js";
import signinCont from "../controllers/signinCont.js";
import signoutCont from "../controllers/signoutCont.js";
import verifyUser from "../middlewares/verifyUser.js";
import getDocumentsCont from "../controllers/getDocumentsCont.js";
import deleteDocumentCont from "../controllers/deleteDocumentCont.js";
import getDocumentCont from "../controllers/getDocumentCont.js";
import addDocumentCont from "../controllers/addDocumentCont.js";
import updateDocumentCont from "../controllers/updateDocumentCont.js";
import addContentCont from "../controllers/addContentCont.js";
import authCont from "../controllers/authCont.js";
import googleOAuth from "../auth/googleOAuth.js";
import updateImgCont from "../controllers/updateImgCont.js";
import updateTitleCont from "../controllers/updateTitleCont.js";
import saveAsPDFCont from "../controllers/saveAsPDFCont.js";

router.post("/signup", signupCont);
router.post("/signin", signinCont);
router.post("/signout", signoutCont);
router.post("/google-login", googleOAuth);

router.get("/user/me", verifyUser, authCont);
router.put("/update-user", verifyUser, updateImgCont);
router.put("/document/:id/update-title", verifyUser, updateTitleCont);
router.get("/documents", verifyUser, getDocumentsCont);
router.post("/document", verifyUser, addDocumentCont);

router.get("/document/:id", verifyUser, getDocumentCont);
router.put("/document/:id", verifyUser, updateDocumentCont);
router.delete("/document/:id", verifyUser, deleteDocumentCont);

router.post("/document/:id/content", addContentCont);

router.get("/document/:id/pdf", saveAsPDFCont);

export default router;
