import { StatusCodes } from 'http-status-codes';
import TicketModel from '../../models/ticketModel.js';

const createTicket = async (req, res) => {
  const data = req.body;

  const createdTicket = await TicketModel.create(data);

  res.status(StatusCodes.OK).json({ msg: 'Ticket created', createdTicket });
};

export { createTicket };
