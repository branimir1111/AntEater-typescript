import { StatusCodes } from 'http-status-codes';
import CommentTicketModel from '../../models/commentTicketModel.js';

const deleteTicketComment = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is deleteTicketCOMMENT controller!' });
};
export { deleteTicketComment };
