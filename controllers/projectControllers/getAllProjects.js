import projectModel from '../../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';

const getAllProjects = async (req, res) => {
  const { search, status, sort, page: currPage } = req.query;

  let queryObject = {};

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

  const allProjects = await projectModel.aggregate([
    {
      $match: queryObject,
    },
    {
      $lookup: {
        from: 'users',
        localField: 'createdBy',
        foreignField: '_id',
        as: 'createdByUser',
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'projectManager',
        foreignField: '_id',
        as: 'projectManagerUser',
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'teamMembers',
        foreignField: '_id',
        as: 'teamMembersUser',
      },
    },
    {
      $addFields: {
        createdBy: {
          $arrayElemAt: ['$createdByUser', 0],
        },
        projectManager: {
          $arrayElemAt: ['$projectManagerUser', 0],
        },
        teamMembers: '$teamMembersUser',
      },
    },
    {
      $project: {
        projectName: 1,
        description: 1,
        createdBy: { _id: 1, firstName: 1, lastName: 1 },
        projectManager: { _id: 1, firstName: 1, lastName: 1 },
        teamMembers: {
          $map: {
            input: '$teamMembers',
            as: 'member',
            in: {
              _id: '$$member._id',
              firstName: '$$member.firstName',
              lastName: '$$member.lastName',
            },
          },
        },
        status: 1,
        projectBugs: 1,
        projectTasks: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    },
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
  const totalCountResult = await projectModel.aggregate(filteredProjects);
  const numOfFilteredProjects =
    totalCountResult.length > 0 ? totalCountResult[0].totalProjects : 0;
  const numOfAllProjects = await projectModel.countDocuments();
  const numOfPages = Math.ceil(numOfFilteredProjects / limit);

  res.status(StatusCodes.OK).json({
    numOfAllProjects,
    numOfFilteredProjects,
    numOfPages,
    currentPage: page,
    allProjects,
  });
};

export { getAllProjects };
