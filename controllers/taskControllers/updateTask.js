import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';

const updateTask = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedTask = await TaskModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Task successfully updated', updatedTask });
};

export { updateTask };
