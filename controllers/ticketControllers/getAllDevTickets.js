import { StatusCodes } from 'http-status-codes';
import TicketModel from '../../models/ticketModel.js';
import mongoose from 'mongoose';
import { userProjectAndTaskFromTicket } from '../../utils/aggregations.js';

const getAllDevTickets = async (req, res) => {
  const { userId } = req.user;
  const { projectId } = req.query;

  let queryObject = { assignedTo: new mongoose.Types.ObjectId(userId) };

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

export { getAllDevTickets };
