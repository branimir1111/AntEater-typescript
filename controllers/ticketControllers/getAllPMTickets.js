import { StatusCodes } from 'http-status-codes';

const getAllPMTickets = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ msg: 'This is getAllPMTickets controller' });
};
export { getAllPMTickets };
