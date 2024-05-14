import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';
import mongoose from 'mongoose';
import { userAndProjectFromTask } from '../../utils/aggregations.js';

const getAllTasks = async (req, res) => {
  const { projectId } = req.query;

  let queryObject = {};

  if (projectId) {
    queryObject.projectId = new mongoose.Types.ObjectId(projectId);
  }

  const allTasks = await TaskModel.aggregate([
    {
      $match: queryObject,
    },
    ...userAndProjectFromTask,
  ]);

  res.status(StatusCodes.OK).json({ allTasks });
  return;
};

export { getAllTasks };
