import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';

const deleteTaskComment = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is deleteTaskCOMMENT controller!' });
};
export { deleteTaskComment };
