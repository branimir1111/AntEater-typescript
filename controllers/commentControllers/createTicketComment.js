import { StatusCodes } from 'http-status-codes';
import CommentTicketModel from '../../models/commentTicketModel.js';

const createTicketComment = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is createTicketCOMMENT controller!' });
};
export { createTicketComment };
