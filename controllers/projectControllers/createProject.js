import projectModel from '../../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest } from '../../errors/customErrors.js';

const createProject = async (req, res) => {
  req.body.createdBy = { _id: req.user.userId };
  const newProject = req.body;

  if (newProject.teamMembers.length < 1) {
    throw new BadRequest('You must select at least one developer');
  }

  const newProjectCreated = await projectModel.create(newProject);

  let queryObject = {};
  queryObject._id = newProjectCreated._id;
  const [createdProject] = await projectModel.aggregate([
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
  ]);
  res
    .status(StatusCodes.CREATED)
    .json({ project: createdProject, msg: 'Project successfully created!' });
};

export { createProject };
