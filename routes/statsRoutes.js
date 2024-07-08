import { Router } from 'express';
const router = Router();
import { getProjectsStats } from '../controllers/statisticsControllers/projectsStats.js';
import { getTasksStats } from '../controllers/statisticsControllers/tasksStats.js';
import { getTicketsStats } from '../controllers/statisticsControllers/ticketsStats.js';

router.route('/projects-stats').get(getProjectsStats);
router.route('/tasks-stats').get(getTasksStats);
router.route('/tickets-stats').get(getTicketsStats);

export default router;
