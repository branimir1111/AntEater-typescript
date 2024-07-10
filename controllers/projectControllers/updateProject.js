import ProjectModel from '../../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';

const updateProject = async (req, res) => {
  const { id } = req.params;

  const data = req.body;

  const updatedProject = await ProjectModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Project successfully updated', updatedProject });
};

export { updateProject };
