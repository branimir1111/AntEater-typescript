import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';
import { allAdminTaskCommentsAggregation } from '../../utils/aggregations.js';

const getAllTaskCommentsAdmin = async (req, res) => {
  const { sort, limit: itemsPerPage, page: currPage } = req.query;

  const sortOptions = {
    newest: { createdAt: -1 },
    oldest: { createdAt: 1 },
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  const limit = Number(itemsPerPage) || 5;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allTaskComments = await CommentTaskModel.aggregate([
    { $match: {} },
    ...allAdminTaskCommentsAggregation,
    { $sort: sortKey },
    { $skip: skip },
    { $limit: limit },
  ]);

  const totalCountResult = await CommentTaskModel.aggregate([
    { $match: {} },
    { $count: 'totalTaskComments' },
  ]);
  const numOfTaskComments =
    totalCountResult.length > 0 ? totalCountResult[0].totalTaskComments : 0;
  const numOfPages = Math.ceil(numOfTaskComments / limit);

  res.status(StatusCodes.OK).json({
    numOfTaskComments,
    numOfPages,
    currentPage: page,
    allTaskComments,
  });
};

export { getAllTaskCommentsAdmin };
