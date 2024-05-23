import { StatusCodes } from 'http-status-codes';
import CommentTicketModel from '../../models/commentTicketModel.js';

const getAllTicketComments = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is getAllTicketCOMMENTS controller!' });
};
export { getAllTicketComments };
