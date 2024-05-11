import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';
import mongoose from 'mongoose';
import { userAndProjectFromTask } from '../../utils/aggregations.js';

const getAllMyTasksDev = async (req, res) => {
  const { userId } = req.user;

  let queryObject = { assignedTo: new mongoose.Types.ObjectId(userId) };

  const allTasks = await TaskModel.aggregate([
    {
      $match: queryObject,
    },
    ...userAndProjectFromTask,
  ]);
  const numOfTasks = allTasks.length;
  res.status(StatusCodes.OK).json({ numOfTasks, allTasks });
};

export { getAllMyTasksDev };
