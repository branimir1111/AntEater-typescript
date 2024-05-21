import { StatusCodes } from 'http-status-codes';
import CommentModel from '../../models/commentTicketModel.js';

const getAllTicketComments = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is getAllTicketCOMMENTS controller!' });
};
export { getAllTicketComments };
