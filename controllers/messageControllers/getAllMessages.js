import { StatusCodes } from 'http-status-codes';

const getAllMessages = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is getAllMessages controller' });
};

export { getAllMessages };
