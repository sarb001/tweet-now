import  express from 'express';
import { Profile, UserLogin, UserSignup } from '../Controllers/UserController.js';
import { AuthMiddleware } from '../Authentication/AuthMiddleware.js';

const router =  express.Router();

router.route('/signup').post(UserSignup);

router.route('/login').post(UserLogin);

router.route('/auth').get(AuthMiddleware, Profile);

export default router;

