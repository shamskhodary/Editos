import express from 'express';
const router = express.Router();
import signupCont from '../controllers/signupCont.js';
import signinCont from '../controllers/signinCont.js';
import signoutCont from '../controllers/signoutCont.js';
import verifyUser from '../middlewares/verifyUser.js';

router.post('/signup', signupCont);
router.post('/signin', signinCont);
router.post('/signout', signoutCont);

router.get('/documents', verifyUser, (req, res) => {
    res.send('Documents');
});




export default router;