import { deleteUser } from '../controllers/userControllers/deleteUser.js';
import { getAllUsers } from '../controllers/userControllers/getAllUsers.js';
import { updateUser } from '../controllers/userControllers/updateUser.js';
import { getCurrentUser } from '../controllers/userControllers/getCurrentUser.js';
import { validateUpdateUser } from '../middleware/validationMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

import { Router } from 'express';

const router = Router();

router.route('/all-users').get(getAllUsers);
router.route('/current-user').get(getCurrentUser);
router
  .route('/update-user')
  .patch(upload.single('avatar'), validateUpdateUser, updateUser);
router.route('/delete-user').delete(deleteUser);

export default router;
