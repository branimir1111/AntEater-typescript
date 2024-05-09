import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';
import mongoose from 'mongoose';
import { userAndProjectFromTask } from '../../utils/aggregations.js';

const getAllTasks = async (req, res) => {
  const { projectId } = req.query;

  if (!projectId) {
    const allTasks = await TaskModel.aggregate([...userAndProjectFromTask]);

    const numOfTasks = await TaskModel.countDocuments();

    res.status(StatusCodes.OK).json({ numOfTasks, allTasks });
    return;
  } else {
    let queryObject = { projectId: new mongoose.Types.ObjectId(projectId) };

    const allTasks = await TaskModel.aggregate([
      {
        $match: queryObject,
      },
      ...userAndProjectFromTask,
    ]);

    const numOfTasks = await TaskModel.countDocuments();

    res.status(StatusCodes.OK).json({ numOfTasks, allTasks });
    return;
  }
};

export { getAllTasks };
