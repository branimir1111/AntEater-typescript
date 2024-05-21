import { StatusCodes } from 'http-status-codes';
import CommentModel from '../../models/commentTicketModel.js';

const updateTicketComment = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is updateTicketCOMMENT controller!' });
};
export { updateTicketComment };
