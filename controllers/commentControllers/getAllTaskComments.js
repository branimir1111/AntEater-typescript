import { StatusCodes } from 'http-status-codes';
import CommentModel from '../../models/commentTaskModel.js';

const getAllTaskComments = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is getAllTaskCOMMENTS controller!' });
};
export { getAllTaskComments };
