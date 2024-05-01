import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';

const getAllTasks = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is getAllTasks controller!' });
};

export { getAllTasks };
