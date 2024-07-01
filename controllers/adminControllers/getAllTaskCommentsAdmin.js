import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';

const getAllTaskCommentsAdmin = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is getAllTaskCommentsAdmin controller' });
};

export { getAllTaskCommentsAdmin };
