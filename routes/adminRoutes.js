import { Router } from 'express';
const router = Router();

import { getAllProjectsAdmin } from '../controllers/adminControllers/adminProjects/getAllProjectsAdmin.js';
import { getAllTasksAdmin } from '../controllers/adminControllers/adminProjects/getAllTasksAdmin.js';

router.route('/all-admin-projects').get(getAllProjectsAdmin);
router.route('/all-admin-tasks').get(getAllTasksAdmin);

export default router;
