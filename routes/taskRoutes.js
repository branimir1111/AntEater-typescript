import { Router } from 'express';
import { getAllTasks } from '../controllers/taskControllers/getAllTasks.js';
import { getAllMyTasksDev } from '../controllers/taskControllers/getMyAllTasksDev.js';
import { createTask } from '../controllers/taskControllers/createTask.js';
import { updateTask } from '../controllers/taskControllers/updateTask.js';
import { deleteTask } from '../controllers/taskControllers/deleteTask.js';
import { validateNewTask } from '../middleware/validationMiddleware.js';
import { getMyAllTasksPM } from '../controllers/taskControllers/getMyAllTasksPM.js';
import { authorizePermissions } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/all-tasks').get(getAllTasks);
router.route('/all-tasks-dev').get(getAllMyTasksDev);
router
  .route('/all-tasks-pm')
  .get(authorizePermissions('projectmanager', 'admin'), getMyAllTasksPM);
router.route('/create-task').post(validateNewTask, createTask);
router.route('/update-task/:id').patch(updateTask);
router.route('/delete-task/:id').delete(deleteTask);

export default router;
