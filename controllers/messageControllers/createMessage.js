import { StatusCodes } from 'http-status-codes';
import MessageModel from '../../models/messageModel.js';

const createMessage = async (req, res) => {
  const newMessageCreated = await MessageModel.create(req.body);
  res.status(StatusCodes.OK).json({ msg: 'Message sent', newMessageCreated });
};
export { createMessage };
