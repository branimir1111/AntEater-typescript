import { Router } from 'express';
import { getAllProjects } from '../controllers/projectControllers/getAllProjects.js';
import { createProject } from '../controllers/projectControllers/createProject.js';
import { deleteProject } from '../controllers/projectControllers/deleteProject.js';
import { getSingleProject } from '../controllers/projectControllers/getSingleProject.js';
import { getAllMyProjects } from '../controllers/projectControllers/getAllMyProjects.js';
import { validateNewProject } from '../middleware/validationMiddleware.js';
import { getAllPMProjects } from '../controllers/projectControllers/getAllPMProjects.js';

const router = Router();

router.route('/all-projects').get(getAllProjects);
router.route('/all-projects-dev').get(getAllMyProjects);
router.route('/all-projects-pm').get(getAllPMProjects);
router.route('/create-project').post(validateNewProject, createProject);
router.route('/single-project/:id').get(getSingleProject);
router.route('/delete-project/:id').delete(deleteProject);

export default router;
