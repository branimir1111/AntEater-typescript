import { StatusCodes } from 'http-status-codes';
import CommentTicketModel from '../../models/commentTicketModel.js';
import { allAdminTicketCommentsAggregation } from '../../utils/aggregations.js';

const getAllTicketCommentsAdmin = async (req, res) => {
  const { sort, limit: itemsPerPage, page: currPage } = req.query;

  const sortOptions = {
    newest: { createdAt: -1 },
    oldest: { createdAt: 1 },
    'a-z': { projectName: 1 },
    'z-a': { projectName: -1 },
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  const limit = Number(itemsPerPage) || 5;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allTicketComments = await CommentTicketModel.aggregate([
    { $match: {} },
    ...allAdminTicketCommentsAggregation,
    { $sort: sortKey },
    { $skip: skip },
    { $limit: limit },
  ]);

  const totalCountResult = await CommentTicketModel.aggregate([
    { $match: {} },
    { $count: 'totalTicketComments' },
  ]);
  const numOfTicketComments =
    totalCountResult.length > 0 ? totalCountResult[0].totalTicketComments : 0;
  const numOfPages = Math.ceil(numOfTicketComments / limit);

  res
    .status(StatusCodes.OK)
    .json({
      numOfTicketComments,
      numOfPages,
      currentPage: page,
      allTicketComments,
    });
};

export { getAllTicketCommentsAdmin };
