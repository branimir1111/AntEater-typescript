import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';

const deleteTaskComment = async (req, res) => {
  const { id: commentId } = req.params;
  await CommentTaskModel.findByIdAndDelete({ _id: commentId });
  res.status(StatusCodes.OK).json({ msg: 'Comment deleted successfully' });
};
export { deleteTaskComment };
