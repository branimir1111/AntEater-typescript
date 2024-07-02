import { StatusCodes } from 'http-status-codes';
import { userProjectAndTaskFromTicket } from '../../utils/aggregations.js';
import TicketModel from '../../models/ticketModel.js';

const getAllTicketsAdmin = async (req, res) => {
  const {
    search,
    ticketType,
    priority,
    status,
    sort,
    limit: itemsPerPage,
    page: currPage,
  } = req.query;

  let queryObject = {};

  if (search) {
    queryObject.title = { $regex: search, $options: 'i' };
  }
  if (ticketType && ticketType !== 'all') {
    queryObject.ticketType = ticketType;
  }
  if (priority && priority !== 'all') {
    queryObject.priority = priority;
  }
  if (status && status !== 'all') {
    queryObject.status = status;
  }

  const sortOptions = {
    newest: { createdAt: -1 },
    oldest: { createdAt: 1 },
    'a-z': { title: 1 },
    'z-a': { title: -1 },
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  const limit = Number(itemsPerPage) || 5;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allAdminTickets = await TicketModel.aggregate([
    { $match: queryObject },
    ...userProjectAndTaskFromTicket,
    { $sort: sortKey },
    { $skip: skip },
    { $limit: limit },
  ]);

  const totalCountResult = await TicketModel.aggregate([
    { $match: queryObject },
    { $count: 'totalTickets' },
  ]);

  const numOfFilteredTickets =
    totalCountResult.length > 0 ? totalCountResult[0].totalTickets : 0;
  const numOfPages = Math.ceil(numOfFilteredTickets / limit);
  const numOfAllTickets = await TicketModel.countDocuments();

  res.status(StatusCodes.OK).json({
    numOfAllTickets,
    numOfPages,
    currentPage: page,
    allAdminTickets,
  });
};

export { getAllTicketsAdmin };
