import { StatusCodes } from 'http-status-codes';

const getAllTickets = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is getAllTickets controller' });
};

export { getAllTickets };
