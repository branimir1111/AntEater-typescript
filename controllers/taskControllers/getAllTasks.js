import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';
import mongoose from 'mongoose';

const getAllTasks = async (req, res) => {
  const { projectId } = req.query;

  if (!projectId) {
    const allTasks = await TaskModel.find({});
    const numOfTasks = await TaskModel.countDocuments();
    res.status(StatusCodes.OK).json({ numOfTasks, allTasks });
    return;
  } else {
    const allTasks = await TaskModel.find({
      projectId: new mongoose.Types.ObjectId(projectId),
    });
    const numOfTasks = await TaskModel.countDocuments();
    res.status(StatusCodes.OK).json({ numOfTasks, allTasks });
    return;
  }
};

export { getAllTasks };
