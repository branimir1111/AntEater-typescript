import { StatusCodes } from 'http-status-codes';
import CommentTicketModel from '../../models/commentTicketModel.js';

const updateTicketComment = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedTicketComment = await CommentTicketModel.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Comment successfully updated', updatedTicketComment });
};
export { updateTicketComment };
