import ProjectModel from '../../models/ProjectModel.js';
import { StatusCodes } from 'http-status-codes';
import { usersFromProject } from '../../utils/aggregations.js';
import mongoose from 'mongoose';

const updateProject = async (req, res) => {
  //   const singleProjectId = req.params;

  //   const [singleProject] = await ProjectModel.aggregate([
  //     {
  //       $match: { _id: new mongoose.Types.ObjectId(singleProjectId) },
  //     },
  //     ...usersFromProject,
  //   ]);

  res.status(StatusCodes.OK).json({ msg: 'This is updateProject' });
};

export { updateProject };
