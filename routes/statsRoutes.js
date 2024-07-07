import { Router } from 'express';
const router = Router();
import { getProjectsStats } from '../controllers/statisticsControllers/projectsStats.js';

router.route('/projects-stats').get(getProjectsStats);

export default router;
