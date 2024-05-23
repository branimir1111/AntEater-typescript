import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';

const createTaskComment = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is createTaskCOMMENT controller!' });
};
export { createTaskComment };
