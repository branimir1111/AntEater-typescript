import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';

const updateTask = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is updateTask controller!' });
};

export { updateTask };
