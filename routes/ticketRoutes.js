import { Router } from 'express';
const router = Router();
import { getAllTickets } from '../controllers/ticketControllers/getAllTickets.js';
import { createTicket } from '../controllers/ticketControllers/createTicket.js';
import { updateTicket } from '../controllers/ticketControllers/updateTicket.js';
import { deleteTicket } from '../controllers/ticketControllers/deleteTicket.js';
import { validateNewTicket } from '../middleware/validationMiddleware.js';

router.route('/all-tickets').get(getAllTickets);
router.route('/create-ticket').post(validateNewTicket, createTicket);
router.route('/update-ticket/:id').patch(updateTicket);
router.route('/delete-ticket/:id').delete(deleteTicket);

export default router;
