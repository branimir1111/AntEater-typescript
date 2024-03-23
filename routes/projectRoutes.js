import { Router } from 'express';
import {
  getAllProjects,
  createProject,
  getSingleProject,
  deleteProject,
} from '../controllers/projectControllers.js';
import { validateNewProject } from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/all-projects').get(getAllProjects);
router.route('/create-project').post(validateNewProject, createProject);
router.route('/single-project/:id').get(getSingleProject);
router.route('/delete-project/:id').delete(deleteProject);

export default router;
