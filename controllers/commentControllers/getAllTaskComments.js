import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';
import { userProjectAndTaskFromTaskComment } from '../../utils/aggregations.js';

const getAllTaskComments = async (req, res) => {
  const allTaskComments = await CommentTaskModel.aggregate([
    ...userProjectAndTaskFromTaskComment,
  ]);

  const numOfTaskComments = allTaskComments.length;

  res.status(StatusCodes.OK).json({ numOfTaskComments, allTaskComments });
};
export { getAllTaskComments };
