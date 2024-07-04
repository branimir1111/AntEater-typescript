import { StatusCodes } from 'http-status-codes';
import MessageModel from '../../models/messageModel.js';
import { allAdminMessagesAggregation } from '../../utils/aggregations.js';

const getAllMessagesAdmin = async (req, res) => {
  const { sort, limit: itemsPerPage, page: currPage } = req.query;

  const sortOptions = {
    newest: { createdAt: -1 },
    oldest: { createdAt: 1 },
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  const limit = Number(itemsPerPage) || 6;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allAdminMessages = await MessageModel.aggregate([
    { $match: {} },
    ...allAdminMessagesAggregation,
    { $sort: sortKey },
    { $skip: skip },
    { $limit: limit },
  ]);

  const totalCountResult = await MessageModel.aggregate([
    { $match: {} },
    { $count: 'totalMessages' },
  ]);

  const numOfMessages =
    totalCountResult.length > 0 ? totalCountResult[0].totalMessages : 0;
  const numOfPages = Math.ceil(numOfMessages / limit);

  res.status(StatusCodes.OK).json({
    numOfMessages,
    numOfPages,
    currentPage: page,
    allAdminMessages,
  });
};

export { getAllMessagesAdmin };
