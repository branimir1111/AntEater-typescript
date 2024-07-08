import { StatusCodes } from 'http-status-codes';
import TicketModel from '../../models/ticketModel.js';

const getTicketsStats = async (req, res) => {
  let ticketTypeStats = await TicketModel.aggregate([
    { $match: {} },
    { $group: { _id: '$ticketType', count: { $sum: 1 } } },
  ]);

  ticketTypeStats = ticketTypeStats.reduce((acc, curr) => {
    const { _id: ticketType, count } = curr;
    acc[ticketType] = count;
    return acc;
  }, {});

  const ticketsByType = [
    { ticketType: 'feature', tickets: ticketTypeStats.feature || 0 },
    { ticketType: 'improvement', tickets: ticketTypeStats.improvement || 0 },
    { ticketType: 'security', tickets: ticketTypeStats.security || 0 },
    { ticketType: 'bug', tickets: ticketTypeStats.bug || 0 },
  ];

  let ticketPriorityStats = await TicketModel.aggregate([
    { $match: {} },
    { $group: { _id: '$priority', count: { $sum: 1 } } },
  ]);

  ticketPriorityStats = ticketPriorityStats.reduce((acc, curr) => {
    const { _id: priority, count } = curr;
    acc[priority] = count;
    return acc;
  }, {});

  const ticketsByPriority = [
    { priority: 'urgent', tickets: ticketPriorityStats.urgent || 0 },
    { priority: 'high', tickets: ticketPriorityStats.high || 0 },
    { priority: 'medium', tickets: ticketPriorityStats.medium || 0 },
    { priority: 'low', tickets: ticketPriorityStats.low || 0 },
  ];

  let ticketStatusStats = await TicketModel.aggregate([
    { $match: {} },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);

  ticketStatusStats = ticketStatusStats.reduce((acc, curr) => {
    const { _id: status, count } = curr;
    acc[status] = count;
    return acc;
  }, {});

  const ticketsByStatus = [
    { status: 'new', tickets: ticketStatusStats.new || 0 },
    { status: 'in-progress', tickets: ticketStatusStats['in progress'] || 0 },
    { status: 'under-review', tickets: ticketStatusStats['under review'] || 0 },
    { status: 'rejected', tickets: ticketStatusStats.rejected || 0 },
    { status: 'cancelled', tickets: ticketStatusStats.cancelled || 0 },
    { status: 'completed', tickets: ticketStatusStats.completed || 0 },
  ];

  const numOfAllTickets = await TicketModel.countDocuments();

  res.status(StatusCodes.OK).json({
    numOfAllTickets,
    ticketsByType,
    ticketsByPriority,
    ticketsByStatus,
  });
};

export { getTicketsStats };
