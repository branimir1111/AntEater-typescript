import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';

const createTask = async (req, res) => {
  console.log(req.body);
  console.log(req.body);
  res.status(StatusCodes.OK).json({ msg: 'This is createTask controller!' });
};

export { createTask };
