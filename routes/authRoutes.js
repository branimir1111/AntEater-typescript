import { logout } from '../controllers/authControllers/logoutUser.js';
import { register } from '../controllers/authControllers/registerUser.js';
import { login } from '../controllers/authControllers/loginUser.js';
import {
  validateRegistration,
  validateLogin,
} from '../middleware/validationMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

import { Router } from 'express';

const router = Router();

router
  .route('/register')
  .post(upload.single('avatar'), validateRegistration, register);
router.route('/login').post(validateLogin, login);
router.route('/logout').get(logout);

export default router;
