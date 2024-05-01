import ProjectModel from '../../models/ProjectModel.js';
import { StatusCodes } from 'http-status-codes';
import { usersFromPosts } from '../../utils/aggregations.js';
import mongoose from 'mongoose';

const getSingleProject = async (req, res) => {
  const singleProjectId = req.params;

  const [singleProject] = await ProjectModel.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(singleProjectId) },
    },
    ...usersFromPosts,
  ]);

  res.status(StatusCodes.OK).json({ singleProject });
};

export { getSingleProject };
