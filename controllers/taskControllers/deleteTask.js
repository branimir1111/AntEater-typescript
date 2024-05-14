import TaskModel from '../../models/taskModel.js';
import { StatusCodes } from 'http-status-codes';

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await TaskModel.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ msg: 'Task successfully deleted' });
};

export { deleteTask };
