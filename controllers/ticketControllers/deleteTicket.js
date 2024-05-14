import { StatusCodes } from 'http-status-codes';

const deleteTicket = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This si deleteTicket controller' });
};

export { deleteTicket };
