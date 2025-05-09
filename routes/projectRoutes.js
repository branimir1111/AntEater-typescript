import { Router } from 'express';
import { getAllProjects } from '../controllers/projectControllers/getAllProjects.js';
import { createProject } from '../controllers/projectControllers/createProject.js';
import { deleteProject } from '../controllers/projectControllers/deleteProject.js';
import { getSingleProject } from '../controllers/projectControllers/getSingleProject.js';
import { getAllDevProjects } from '../controllers/projectControllers/getAllDevProjects.js';
import { validateNewProject } from '../middleware/validationMiddleware.js';
import { getAllPMProjects } from '../controllers/projectControllers/getAllPMProjects.js';
import { updateProject } from '../controllers/projectControllers/updateProject.js';
import { authorizePermissions } from '../middleware/authMiddleware.js';
import { getAllPMProjectsList } from '../controllers/projectControllers/getAllPMProjectsList.js';

const router = Router();

router.route('/all-projects').get(getAllProjects);
router.route('/all-projects-dev').get(getAllDevProjects);
router
  .route('/all-projects-pm')
  .get(authorizePermissions('projectmanager', 'admin'), getAllPMProjects);
router
  .route('/all-projects-pm-list')
  .get(authorizePermissions('projectmanager', 'admin'), getAllPMProjectsList);
router.route('/create-project').post(validateNewProject, createProject);
router.route('/single-project/:id').get(getSingleProject);
router
  .route('/update-project/:id')
  .patch(authorizePermissions('projectmanager', 'admin'), updateProject);
router
  .route('/delete-project/:id')
  .delete(authorizePermissions('projectmanager', 'admin'), deleteProject);

export default router;
