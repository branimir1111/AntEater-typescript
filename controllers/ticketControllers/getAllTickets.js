import { StatusCodes } from 'http-status-codes';
import TicketModel from '../../models/ticketModel.js';
import { userProjectAndTaskFromTicket } from '../../utils/aggregations.js';

const getAllTickets = async (req, res) => {
  const { ticketType, priority, status, page: currPage } = req.query;

  let queryObject = {};
  if (ticketType && ticketType !== 'all') {
    queryObject.ticketType = ticketType;
  }
  if (priority && priority !== 'all') {
    queryObject.priority = priority;
  }
  if (status && status !== 'all') {
    queryObject.status = status;
  }

  const page = Number(currPage) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  const filteredTickets = await TicketModel.aggregate([
    { $match: queryObject },
    ...userProjectAndTaskFromTicket,
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ]);

  const filteredTicketsNum = [
    { $match: queryObject },
    { $count: 'totalTickets' },
  ];

  const totalCountResult = await TicketModel.aggregate(filteredTicketsNum);
  const numOfFilteredTickets =
    totalCountResult.length > 0 ? totalCountResult[0].totalTickets : 0;

  const numOfPages = Math.ceil(numOfFilteredTickets / limit);

  res
    .status(StatusCodes.OK)
    .json({
      numOfPages,
      numOfTickets: numOfFilteredTickets,
      currentPage: page,
      filteredTickets,
    });
};

export { getAllTickets };
