import ProjectModel from '../../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';
import { usersFromProject } from '../../utils/aggregations.js';
import mongoose from 'mongoose';

const getSingleProject = async (req, res) => {
  const singleProjectId = req.params;

  const [singleProject] = await ProjectModel.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(singleProjectId) },
    },
    ...usersFromProject,
  ]);

  res.status(StatusCodes.OK).json({ singleProject });
};

export { getSingleProject };
