import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';

const getAllTasks = async (req, res) => {
  const allTasks = await TaskModel.find({});
  const numOfTasks = await TaskModel.countDocuments();
  res.status(StatusCodes.OK).json({ numOfTasks, allTasks });
};

export { getAllTasks };
