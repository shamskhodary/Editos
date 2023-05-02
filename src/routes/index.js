import express from 'express';
const router = express.Router();
import signupCont from '../controllers/signupCont.js';
import signinCont from '../controllers/signinCont.js';

router.post('/signup', signupCont);
router.post('/signin', signinCont);




export default router;