import projectModel from '../../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest } from '../../errors/customErrors.js';
import { usersFromPosts } from '../../utils/aggregations.js';
import mongoose from 'mongoose';

const createProject = async (req, res) => {
  req.body.createdBy = { _id: req.user.userId };
  const newProject = req.body;

  if (newProject.teamMembers.length < 1) {
    throw new BadRequest('You must select at least one developer');
  }

  const newProjectCreated = await projectModel.create(newProject);

  const [createdProject] = await projectModel.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(newProjectCreated._id) },
    },
    ...usersFromPosts,
  ]);

  res
    .status(StatusCodes.CREATED)
    .json({ project: createdProject, msg: 'Project successfully created!' });
};

export { createProject };
