import TaskModel from '../../models/taskModel.js';
import { StatusCodes } from 'http-status-codes';

const deleteTask = async (req, res) => {
  const { id } = req.params;

  res
    .status(StatusCodes.OK)
    .json({ msg: `This si deleteTask controller! Task id: ${id}` });
};

export { deleteTask };
