import { Router } from 'express';
const router = Router();

import { getAllProjectsAdmin } from '../controllers/adminControllers/adminProjects/getAllProjectsAdmin.js';

router.route('/all-admin-projects').get(getAllProjectsAdmin);

export default router;
