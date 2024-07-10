import ProjectModel from '../../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest } from '../../errors/customErrors.js';
import { usersFromProject } from '../../utils/aggregations.js';
import mongoose from 'mongoose';

const createProject = async (req, res) => {
  req.body.createdBy = { _id: req.user.userId };
  const newProject = req.body;

  if (newProject.teamMembers.length < 1) {
    throw new BadRequest('You must select at least one developer');
  }

  const newProjectCreated = await ProjectModel.create(newProject);

  const [createdProject] = await ProjectModel.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(newProjectCreated._id) },
    },
    ...usersFromProject,
  ]);

  res
    .status(StatusCodes.CREATED)
    .json({ project: createdProject, msg: 'Project successfully created!' });
};

export { createProject };
