import { Router } from 'express';
import { getAllProjects } from '../controllers/projectControllers/getAllProjects.js';
import { createProject } from '../controllers/projectControllers/createProject.js';
import { deleteProject } from '../controllers/projectControllers/deleteProject.js';
import { getSingleProject } from '../controllers/projectControllers/getSingleProject.js';
import { validateNewProject } from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/all-projects').get(getAllProjects);
router.route('/create-project').post(validateNewProject, createProject);
router.route('/single-project/:id').get(getSingleProject);
router.route('/delete-project/:id').delete(deleteProject);

export default router;
