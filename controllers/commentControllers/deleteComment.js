import { StatusCodes } from 'http-status-codes';
import CommentModel from '../../models/commentTaskModel.js';

const deleteComment = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is deleteCOMMENT controller!' });
};
export { deleteComment };
