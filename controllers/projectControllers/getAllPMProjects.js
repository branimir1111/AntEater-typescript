import { StatusCodes } from 'http-status-codes';
import ProjectModel from '../../models/ProjectModel.js';
import mongoose from 'mongoose';
import { usersFromProject } from '../../utils/aggregations.js';

const getAllPMProjects = async (req, res) => {
  const projectManagerId = req.user.userId;
  console.log(projectManagerId);

  let queryObject = {
    projectManager: new mongoose.Types.ObjectId(projectManagerId),
  };

  const allPMProjects = await ProjectModel.aggregate([
    { $match: queryObject },
    ...usersFromProject,
  ]);
  const numOfPMProjects = allPMProjects.length;

  res.status(StatusCodes.OK).json({ numOfPMProjects, allPMProjects });
};

export { getAllPMProjects };
