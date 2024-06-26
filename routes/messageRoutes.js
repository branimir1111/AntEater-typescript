import { Router } from 'express';
import { createMessage } from '../controllers/messageControllers/createMessage.js';
import { updateMessage } from '../controllers/messageControllers/updateMessage.js';
import { deleteMessage } from '../controllers/messageControllers/deleteMessage.js';
import { getAllMessages } from '../controllers/messageControllers/getAllMessages.js';
import { validateNewMessage } from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/all-user-messages').get(getAllMessages);
router.route('/create-message').post(validateNewMessage, createMessage);
router.route('/update-message/:id').patch(updateMessage);
router.route('/delete-message/:id').delete(deleteMessage);

export default router;
