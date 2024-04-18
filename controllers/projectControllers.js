import projectModel from '../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest } from '../errors/customErrors.js';

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

  // pagination
  const limit = Number(req.query.limit) || 3;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  // Izvršavanje agregacije
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

  //  Number of All and Filtered projects and numOfPages
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

// const getAllProjects = async (req, res) => {
//   // Sorting
//   const { search, status, sort, page: currPag } = req.query;

//   let queryObject = {};

//   // Search
//   if (search) {
//     queryObject.$or = [{ projectName: { $regex: search, $options: 'i' } }];
//   }
//   // Status
//   if (status && status !== 'all') {
//     queryObject.status = status;
//   }
//   // Sort
//   const sortOptions = {
//     newest: '-createdAt',
//     oldest: 'createdAt',
//     'a-z': 'projectName',
//     'z-a': '-projectName',
//   };
//   const sortKey = sortOptions[sort] || sortOptions.newest;

//   // Pagination
//   const page = Number(currPag) || 1;
//   const limit = Number(req.query.limit) || 3;
//   const skip = (page - 1) * limit;

//   const allProjects = await projectModel
//     .find(queryObject)
//     .sort(sortKey)
//     .skip(skip)
//     .limit(limit);

//   const filteredProjects = await projectModel.find(queryObject);
//   const numOfFilteredProjects = filteredProjects.length;
//   const numOfPages = Math.ceil(numOfFilteredProjects / limit);

//   const findAllProjects = await projectModel.find({});
//   const numOfAllProjects = findAllProjects.length;
//   res.status(StatusCodes.OK).json({
//     numOfAllProjects,
//     numOfFilteredProjects,
//     numOfPages,
//     currentPage: page,
//     allProjects,
//   });
// };

const getSingleProject = async (req, res) => {
  const singleProjectId = req.params;
  const singleProject = await projectModel.findById({
    _id: singleProjectId.id,
  });
  res.status(StatusCodes.OK).json({ singleProject });
};

const createProject = async (req, res) => {
  req.body.createdBy = { _id: req.user.userId };

  //   req.body.projectManager = JSON.parse(req.body.projectManager);
  //   req.body.teamMembers = req.body.teamMembers.map((member) =>
  //   JSON.parse(member)
  // );

  const newProject = req.body;

  if (newProject.teamMembers.length < 1) {
    throw new BadRequest('You must select at least one developer');
  }
  const createdProject = await projectModel.create(newProject);
  res
    .status(StatusCodes.CREATED)
    .json({ project: createdProject, msg: 'Project successfully created!' });
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  await projectModel.findByIdAndDelete({ _id: id });

  res.status(StatusCodes.OK).json({ msg: 'Project deleted!' });
};

export { createProject, getAllProjects, getSingleProject, deleteProject };
