import express from 'express';
const router = express.Router();
import signupCont from '../controllers/signupCont.js';
import signinCont from '../controllers/signinCont.js';
import signoutCont from '../controllers/signoutCont.js';
import verifyUser from '../middlewares/verifyUser.js';
import getDocumentsCont from '../controllers/getDocumentsCont.js';
import deleteDocumentCont from '../controllers/deleteDocumentCont.js';
import getDocumentCont from '../controllers/getDocumentCont.js';

router.post('/signup', signupCont);
router.post('/signin', signinCont);
router.post('/signout', signoutCont);


router.get('/documents', verifyUser, getDocumentsCont);
router.get('/documents/:id', getDocumentCont);
router.delete('/documents/:id', verifyUser, deleteDocumentCont);




export default router;