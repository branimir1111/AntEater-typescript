import { StatusCodes } from 'http-status-codes';
import ProjectModel from '../../models/ProjectModel.js';
import mongoose from 'mongoose';
import { usersFromProject } from '../../utils/aggregations.js';

const getAllPMProjects = async (req, res) => {
  const projectManagerId = req.user.userId;
  const { status, sort, page: currPage } = req.query;

  let queryObject = {
    projectManager: new mongoose.Types.ObjectId(projectManagerId),
  };

  if (status && status !== 'all') {
    queryObject.status = status;
  }

  const sortOptions = {
    newest: { createdAt: -1 },
    oldest: { createdAt: 1 },
    'a-z': { projectName: 1 },
    'z-a': { projectName: -1 },
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  const limit = 5;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allPMProjects = await ProjectModel.aggregate([
    { $match: queryObject },
    ...usersFromProject,
    {
      $sort: sortKey,
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ]);

  const filteredProjects = [
    { $match: queryObject },
    { $count: 'totalProjects' },
  ];
  const totalCountResult = await ProjectModel.aggregate(filteredProjects);
  const numOfFilteredProjects =
    totalCountResult.length > 0 ? totalCountResult[0].totalProjects : 0;

  const numOfPages = Math.ceil(numOfFilteredProjects / limit);

  res.status(StatusCodes.OK).json({
    numOfPMProjects: numOfFilteredProjects,
    numOfPages,
    currentPage: page,
    allPMProjects,
  });
};

export { getAllPMProjects };
