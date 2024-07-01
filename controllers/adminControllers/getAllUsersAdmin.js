import { StatusCodes } from 'http-status-codes';
import UsersModel from '../../models/userModel.js';

const getAllUsersAdmin = async (req, res) => {
  const { sort, limit: itemsPerPage, page: currPage } = req.query;

  const sortOptions = {
    newest: { createdAt: -1 },
    oldest: { createdAt: 1 },
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  const limit = Number(itemsPerPage) || 5;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allUsers = await UsersModel.aggregate([
    { $match: {} },
    {
      $project: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        role: 1,
        avatar: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    },
    { $sort: sortKey },
    { $skip: skip },
    { $limit: limit },
  ]);

  const totalCountResult = await UsersModel.aggregate([
    { $match: {} },
    { $count: 'totalUsers' },
  ]);

  const numOfUsers =
    totalCountResult.length > 0 ? totalCountResult[0].totalUsers : 0;
  const numOfPages = Math.ceil(numOfUsers / limit);

  res.status(StatusCodes.OK).json({
    numOfUsers,
    numOfPages,
    currentPage: page,
    allUsers,
  });
};

export { getAllUsersAdmin };
