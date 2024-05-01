import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';

const createTask = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is createTask controller!' });
};

export { createTask };
