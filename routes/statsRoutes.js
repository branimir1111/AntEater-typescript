import { Router } from 'express';
const router = Router();
import { getProjectsStats } from '../controllers/statisticsControllers/projectsStats.js';
import { getTasksStats } from '../controllers/statisticsControllers/tasksStats.js';

router.route('/projects-stats').get(getProjectsStats);
router.route('/tasks-stats').get(getTasksStats);

export default router;
