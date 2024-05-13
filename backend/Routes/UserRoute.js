import  express from 'express';
import { Profile, UserLogin, UserLogout, UserSignup } from '../Controllers/UserController.js';
import { AuthMiddleware } from '../Authentication/AuthMiddleware.js';

const router =  express.Router();

router.route('/signup').post(UserSignup);

router.route('/login').post(UserLogin);

router.route('/logout').get(AuthMiddleware,UserLogout);

router.route('/profile').get(AuthMiddleware, Profile);

export default router;

