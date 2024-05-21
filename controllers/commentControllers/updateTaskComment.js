import { StatusCodes } from 'http-status-codes';
import CommentModel from '../../models/commentTaskModel.js';

const updateTaskComment = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is updateTaskCOMMENT controller!' });
};
export { updateTaskComment };
