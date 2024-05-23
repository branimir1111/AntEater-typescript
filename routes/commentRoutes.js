import { Router } from 'express';
const router = Router();

import { getAllTaskComments } from '../controllers/commentControllers/getAllTaskComments.js';
import { getAllTicketComments } from '../controllers/commentControllers/getAllTicketComments.js';
import { createTaskComment } from '../controllers/commentControllers/createTaskComment.js';
import { createTicketComment } from '../controllers/commentControllers/createTicketComment.js';
import { updateTaskComment } from '../controllers/commentControllers/updateTaskComment.js';
import { updateTicketComment } from '../controllers/commentControllers/updateTicketComment.js';
import { deleteTaskComment } from '../controllers/commentControllers/deleteTaskComment.js';
import { deleteTicketComment } from '../controllers/commentControllers/deleteTicketComment.js';

router.route('/all-task-comments').get(getAllTaskComments);
router.route('/all-ticket-comments').get(getAllTicketComments);
router.route('/create-task-comment').post(createTaskComment);
router.route('/create-ticket-comment').post(createTicketComment);
router.route('/update-task-comment/:id').patch(updateTaskComment);
router.route('/update-ticket-comment/:id').patch(updateTicketComment);
router.route('/delete-task-comment/:id').delete(deleteTaskComment);
router.route('/delete-ticket-comment/:id').delete(deleteTicketComment);

export default router;
