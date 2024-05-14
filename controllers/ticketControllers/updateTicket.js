import { StatusCodes } from 'http-status-codes';

const updateTicket = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This si updateTicket controller' });
};

export { updateTicket };
