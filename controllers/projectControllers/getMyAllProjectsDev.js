import ProjectModel from '../../models/ProjectModel.js';
import { StatusCodes } from 'http-status-codes';
import { usersFromPosts } from '../../utils/aggregations.js';
import mongoose from 'mongoose';

const getMyAllProjectsDev = async (req, res) => {
  const developerId = req.user.userId;
  const { search, status, sort, page: currPage } = req.query;

  let queryObject = { teamMembers: new mongoose.Types.ObjectId(developerId) };

  if (search) {
    queryObject.projectName = { $regex: search, $options: 'i' };
  }

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

  const limit = Number(req.query.limit) || 3;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allProjects = await ProjectModel.aggregate([
    {
      $match: queryObject,
    },
    ...usersFromPosts,
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
  const numOfAllProjects = await ProjectModel.countDocuments();
  const numOfPages = Math.ceil(numOfFilteredProjects / limit);

  res.status(StatusCodes.OK).json({
    numOfAllProjects,
    numOfFilteredProjects,
    numOfPages,
    currentPage: page,
    allProjects,
  });
};

export { getMyAllProjectsDev };