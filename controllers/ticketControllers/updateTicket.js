import { StatusCodes } from 'http-status-codes';
import TicketModel from '../../models/ticketModel.js';

const updateTicket = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedTicket = await TicketModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Task successfully updated', updatedTicket });
};

export { updateTicket };
