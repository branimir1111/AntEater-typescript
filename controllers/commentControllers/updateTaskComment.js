import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';

const updateTaskComment = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedTaskComment = await CommentTaskModel.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Comment successfully updated', updatedTaskComment });
};
export { updateTaskComment };
