import { StatusCodes } from 'http-status-codes';
import CommentModel from '../../models/commentTaskModel.js';

const createComment = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is createCOMMENT controller!' });
};
export { createComment };
