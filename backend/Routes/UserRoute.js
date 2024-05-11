import  express from 'express';
import { UserLogin, UserSignup } from '../Controllers/UserController.js';

const router =  express.Router();

router.route('/signup').post(UserSignup);

router.route('/login').post(UserLogin);

export default router;

