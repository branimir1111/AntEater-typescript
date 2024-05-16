import { StatusCodes } from 'http-status-codes';
import TicketModel from '../../models/ticketModel.js';

const deleteTicket = async (req, res) => {
  const { id } = req.params;
  await TicketModel.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ msg: 'Ticket successfully deleted' });
};

export { deleteTicket };
