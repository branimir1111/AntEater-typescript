import { Router } from 'express';
const router = Router();

import { validateNewTicketComment } from '../middleware/validationMiddleware.js';

import { getAllTicketComments } from '../controllers/commentControllers/getAllTicketComments.js';
import { createTicketComment } from '../controllers/commentControllers/createTicketComment.js';
import { updateTicketComment } from '../controllers/commentControllers/updateTicketComment.js';
import { deleteTicketComment } from '../controllers/commentControllers/deleteTicketComment.js';

router.route('/all-ticket-comments').get(getAllTicketComments);
router
  .route('/create-ticket-comment')
  .post(validateNewTicketComment, createTicketComment);
router.route('/update-ticket-comment/:id').patch(updateTicketComment);
router.route('/delete-ticket-comment/:id').delete(deleteTicketComment);

export default router;
