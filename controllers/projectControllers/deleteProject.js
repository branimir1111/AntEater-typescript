import ProjectModel from '../../models/ProjectModel.js';
import { StatusCodes } from 'http-status-codes';

const deleteProject = async (req, res) => {
  const { id } = req.params;

  await ProjectModel.findByIdAndDelete({ _id: id });

  res.status(StatusCodes.OK).json({ msg: 'Project deleted!' });
};

export { deleteProject };
