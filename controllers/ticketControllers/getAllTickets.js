import { StatusCodes } from 'http-status-codes';
import TicketModel from '../../models/ticketModel.js';
import mongoose from 'mongoose';
import { userProjectAndTaskFromTicket } from '../../utils/aggregations.js';

const getAllTickets = async (req, res) => {
  const { projectId } = req.query;

  let queryObject = {};

  if (projectId) {
    queryObject.projectId = new mongoose.Types.ObjectId(projectId);
  }

  const devTickets = await TicketModel.aggregate([
    { $match: queryObject },
    ...userProjectAndTaskFromTicket,
  ]);

  const numOfTickets = devTickets.length;

  res.status(StatusCodes.OK).json({ numOfTickets, devTickets });
};

export { getAllTickets };
