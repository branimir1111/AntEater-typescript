import { StatusCodes } from 'http-status-codes';
import ProjectModel from '../../models/ProjectModel.js';
import mongoose from 'mongoose';
import { userAndTasksFromProject } from '../../utils/aggregations.js';

const getMyAllTasksPM = async (req, res) => {
  const projectManagerId = req.user.userId;

  let queryObject = {
    projectManager: new mongoose.Types.ObjectId(projectManagerId),
  };

  const allPMProjects = await ProjectModel.aggregate([
    { $match: queryObject },
    ...userAndTasksFromProject,
  ]);

  const numOfPMProjects = allPMProjects.length;

  res.status(StatusCodes.OK).json({
    numOfPMProjects,
    allPMProjects,
  });
};

export { getMyAllTasksPM };
