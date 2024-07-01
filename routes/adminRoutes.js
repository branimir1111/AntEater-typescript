import { Router } from 'express';
const router = Router();

import { getAllProjectsAdmin } from '../controllers/adminControllers/getAllProjectsAdmin.js';
import { getAllTasksAdmin } from '../controllers/adminControllers/getAllTasksAdmin.js';
import { getAllTicketsAdmin } from '../controllers/adminControllers/getAllTicketsAdmin.js';
import { getAllTaskCommentsAdmin } from '../controllers/adminControllers/getAllTaskCommentsAdmin.js';
import { getAllTicketCommentsAdmin } from '../controllers/adminControllers/getAllTicketCommentsAdmin.js';
import { getAllMessagesAdmin } from '../controllers/adminControllers/getAllMessagesAdmin.js';

router.route('/all-admin-projects').get(getAllProjectsAdmin);
router.route('/all-admin-tasks').get(getAllTasksAdmin);
router.route('/all-admin-tickets').get(getAllTicketsAdmin);
router.route('/all-admin-task-comments').get(getAllTaskCommentsAdmin);
router.route('/all-admin-ticket-comments').get(getAllTicketCommentsAdmin);
router.route('/all-admin-messages').get(getAllMessagesAdmin);

export default router;
