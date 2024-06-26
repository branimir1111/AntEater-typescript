import { StatusCodes } from 'http-status-codes';
import MessageModel from '../../models/messageModel.js';

const deleteMessage = async (req, res) => {
  const { id: messageId } = req.params;
  await MessageModel.findByIdAndDelete({ _id: messageId });
  res.status(StatusCodes.OK).json({ msg: 'Message deleted successfully' });
};

export { deleteMessage };
