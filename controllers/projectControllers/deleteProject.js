import projectModel from '../../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';

const deleteProject = async (req, res) => {
  const { id } = req.params;

  await projectModel.findByIdAndDelete({ _id: id });

  res.status(StatusCodes.OK).json({ msg: 'Project deleted!' });
};

export { deleteProject };
