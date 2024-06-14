import { StatusCodes } from 'http-status-codes';
import ProjectModel from '../../models/ProjectModel.js';
import mongoose from 'mongoose';

const getAllPMProjectsList = async (req, res) => {
  const projectManagerId = req.user.userId;

  const allPMProjects = await ProjectModel.find({
    projectManager: new mongoose.Types.ObjectId(projectManagerId),
  });

  res.status(StatusCodes.OK).json({ allPMProjects });
};

export { getAllPMProjectsList };
