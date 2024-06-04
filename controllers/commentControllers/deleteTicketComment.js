import { StatusCodes } from 'http-status-codes';
import CommentTicketModel from '../../models/commentTicketModel.js';

const deleteTicketComment = async (req, res) => {
  const { id: commentId } = req.params;
  await CommentTicketModel.findByIdAndDelete({ _id: commentId });
  res.status(StatusCodes.OK).json({ msg: 'Comment deleted successfully' });
};
export { deleteTicketComment };
