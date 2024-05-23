import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';

const getAllTaskComments = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is getAllTaskCOMMENTS controller!' });
};
export { getAllTaskComments };
