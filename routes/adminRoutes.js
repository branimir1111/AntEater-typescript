import { Router } from 'express';
const router = Router();

import { getAllProjectsAdmin } from '../controllers/adminControllers/getAllProjectsAdmin.js';
import { getAllTasksAdmin } from '../controllers/adminControllers/getAllTasksAdmin.js';
import { getAllTicketsAdmin } from '../controllers/adminControllers/getAllTicketsAdmin.js';
import { getAllTaskCommentsAdmin } from '../controllers/adminControllers/getAllTaskCommentsAdmin.js';

router.route('/all-admin-projects').get(getAllProjectsAdmin);
router.route('/all-admin-tasks').get(getAllTasksAdmin);
router.route('/all-admin-tickets').get(getAllTicketsAdmin);
router.route('/all-admin-task-comments').get(getAllTaskCommentsAdmin);

export default router;
