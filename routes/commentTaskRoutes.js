import { Router } from 'express';
const router = Router();

import { validateNewTaskComment } from '../middleware/validationMiddleware.js';

import { getAllTaskComments } from '../controllers/commentControllers/getAllTaskComments.js';
import { createTaskComment } from '../controllers/commentControllers/createTaskComment.js';
import { updateTaskComment } from '../controllers/commentControllers/updateTaskComment.js';
import { deleteTaskComment } from '../controllers/commentControllers/deleteTaskComment.js';

router.route('/all-task-comments').get(getAllTaskComments);
router
  .route('/create-task-comment')
  .post(validateNewTaskComment, createTaskComment);
router.route('/update-task-comment/:id').patch(updateTaskComment);
router.route('/delete-task-comment/:id').delete(deleteTaskComment);

export default router;
