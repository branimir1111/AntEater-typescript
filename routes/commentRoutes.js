import { Router } from 'express';
const router = Router();

import { getAllTaskComments } from '../controllers/commentControllers/getAllTaskComments.js';
import { getAllTicketComments } from '../controllers/commentControllers/getAllTicketComments.js';
import { createComment } from '../controllers/commentControllers/createComment.js';
import { updateTaskComment } from '../controllers/commentControllers/updateTaskComment.js';
import { updateTicketComment } from '../controllers/commentControllers/updateTicketComment.js';
import { deleteComment } from '../controllers/commentControllers/deleteComment.js';

router.route('/all-task-comments').get(getAllTaskComments);
router.route('/all-ticket-comments').get(getAllTicketComments);
router.route('/create-comment').post(createComment);
router.route('/update-task-comment/:id').patch(updateTaskComment);
router.route('/update-ticket-comment/:id').patch(updateTicketComment);
router.route('/delete-comment/:id').delete(deleteComment);

export default router;
