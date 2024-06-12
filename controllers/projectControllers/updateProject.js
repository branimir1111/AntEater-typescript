import ProjectModel from '../../models/ProjectModel.js';
import { StatusCodes } from 'http-status-codes';
import { usersFromProject } from '../../utils/aggregations.js';
import mongoose from 'mongoose';

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
