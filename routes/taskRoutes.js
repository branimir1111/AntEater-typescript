import { Router } from 'express';
import { getAllTasks } from '../controllers/taskControllers/getAllTasks.js';
import { createTask } from '../controllers/taskControllers/createTask.js';
import { updateTask } from '../controllers/taskControllers/updateTask.js';
import { deleteTask } from '../controllers/taskControllers/deleteTask.js';

const router = Router();

router.route('/all-tasks').get(getAllTasks);
router.route('/create-task').post(createTask);
router.route('/update-task').patch(updateTask);
router.route('/delete-task/:id').delete(deleteTask);

export default router;
