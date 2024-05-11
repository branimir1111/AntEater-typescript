import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';
import mongoose from 'mongoose';
import { userAndProjectFromTask } from '../../utils/aggregations.js';

const getAllMyTasksDev = async (req, res) => {
  const { userId } = req.user;
  const { projectId } = req.query;

  let queryObject = { assignedTo: new mongoose.Types.ObjectId(userId) };

  if (projectId) {
    queryObject.projectId = new mongoose.Types.ObjectId(projectId);
  }

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
