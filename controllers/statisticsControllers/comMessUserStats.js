import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';
import CommentTicketModel from '../../models/commentTicketModel.js';
import MessageModel from '../../models/messageModel.js';
import UserModel from '../../models/userModel.js';

const getComMessUserStats = async (req, res) => {
  const taskComments = await CommentTaskModel.countDocuments();
  const ticketComments = await CommentTicketModel.countDocuments();
  const numOfComments = taskComments + ticketComments;
  const numOfMessages = await MessageModel.countDocuments();
  const allUsers = await UserModel.countDocuments();
  const numOfUsers = allUsers - 1;
  const numOfPms = await UserModel.countDocuments({ role: 'projectmanager' });
  const numOfDevs = await UserModel.countDocuments({ role: 'developer' });
  const usersByRole = [{ projectmanager: numOfPms, developers: numOfDevs }];

  res
    .status(StatusCodes.OK)
    .json({ numOfComments, numOfMessages, numOfUsers, usersByRole });
};

export { getComMessUserStats };
