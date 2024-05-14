import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';

const createTask = async (req, res) => {
  const newTaskCreated = await TaskModel.create(req.body);
  res
    .status(StatusCodes.OK)
    .json({ msg: 'Task successfully created!', newTaskCreated });
};

export { createTask };
