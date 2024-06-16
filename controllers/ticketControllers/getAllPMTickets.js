import { StatusCodes } from 'http-status-codes';
import TicketModel from '../../models/ticketModel.js';
import mongoose from 'mongoose';

const getAllPMTickets = async (req, res) => {
  const projectManagerId = req.user.userId;
  const { page: currPage } = req.query;

  const limit = 5;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allPMTickets = await TicketModel.aggregate([
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
        ticketType: 1,
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

  const totalCountResult = await TicketModel.aggregate([
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
    { $count: 'totalTickets' },
  ]);

  const numOfFilteredTickets =
    totalCountResult.length > 0 ? totalCountResult[0].totalTickets : 0;

  const numOfPages = Math.ceil(numOfFilteredTickets / limit);

  res.status(StatusCodes.OK).json({
    numOfPMTickets: numOfFilteredTickets,
    numOfPages,
    currentPage: page,
    allPMTickets,
  });
};
export { getAllPMTickets };
