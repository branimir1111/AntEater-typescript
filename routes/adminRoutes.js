import { Router } from 'express';
const router = Router();

import { getAllProjectsAdmin } from '../controllers/adminControllers/getAllProjectsAdmin.js';
import { getAllTasksAdmin } from '../controllers/adminControllers/getAllTasksAdmin.js';
import { getAllTicketsAdmin } from '../controllers/adminControllers/getAllTicketsAdmin.js';

router.route('/all-admin-projects').get(getAllProjectsAdmin);
router.route('/all-admin-tasks').get(getAllTasksAdmin);
router.route('/all-admin-tickets').get(getAllTicketsAdmin);

export default router;
