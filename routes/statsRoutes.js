import { Router } from 'express';
const router = Router();
import { getProjectsStats } from '../controllers/statisticsControllers/projectsStats.js';
import { getTasksStats } from '../controllers/statisticsControllers/tasksStats.js';
import { getTicketsStats } from '../controllers/statisticsControllers/ticketsStats.js';
import { getComMessUserStats } from '../controllers/statisticsControllers/comMessUserStats.js';

router.route('/projects-stats').get(getProjectsStats);
router.route('/tasks-stats').get(getTasksStats);
router.route('/tickets-stats').get(getTicketsStats);
router.route('/user-stats').get(getComMessUserStats);

export default router;
