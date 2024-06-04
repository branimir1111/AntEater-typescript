import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';
import mongoose from 'mongoose';

const createTaskComment = async (req, res) => {
  const createdTaskComment = await CommentTaskModel.create(req.body);

  const [newTaskComment] = await CommentTaskModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(createdTaskComment._id) } },
  ]);

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Comment for task created', newTaskComment });
};
export { createTaskComment };
