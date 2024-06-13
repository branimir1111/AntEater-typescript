import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';
import mongoose from 'mongoose';

const getMyAllTasksPM = async (req, res) => {
  const projectManagerId = req.user.userId;
  const { page: currPage } = req.query;

  const limit = 5;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allPMTasks = await TaskModel.aggregate([
    {
      $lookup: {
        from: 'projects',
        localField: 'projectId',
        foreignField: '_id',
        as: 'project',
      },
    },
    {
      $unwind: {
        path: '$project',
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $match: {
        'project.projectManager': new mongoose.Types.ObjectId(projectManagerId),
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'assignedTo',
        foreignField: '_id',
        as: 'assignedUser',
      },
    },
    {
      $unwind: {
        path: '$assignedUser',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        description: 1,
        assignedTo: {
          _id: '$assignedUser._id',
          firstName: '$assignedUser.firstName',
          lastName: '$assignedUser.lastName',
          avatar: '$assignedUser.avatar',
        },
        taskType: 1,
        priority: 1,
        status: 1,
        project: {
          _id: '$project._id',
          projectName: '$project.projectName',
        },
        createdAt: 1,
        updatedAt: 1,
      },
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ]);

  const totalCountResult = await TaskModel.aggregate([
    {
      $lookup: {
        from: 'projects',
        localField: 'projectId',
        foreignField: '_id',
        as: 'project',
      },
    },
    {
      $unwind: {
        path: '$project',
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $match: {
        'project.projectManager': new mongoose.Types.ObjectId(projectManagerId),
      },
    },
    { $count: 'totalTasks' },
  ]);

  const numOfFilteredTasks =
    totalCountResult.length > 0 ? totalCountResult[0].totalTasks : 0;

  const numOfPages = Math.ceil(numOfFilteredTasks / limit);

  res.status(StatusCodes.OK).json({
    numOfPMTasks: numOfFilteredTasks,
    numOfPages,
    currentPage: page,
    allPMTasks,
  });
};

export { getMyAllTasksPM };
