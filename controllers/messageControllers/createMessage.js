import { StatusCodes } from 'http-status-codes';

const createMessage = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is createMessage controller' });
};
export { createMessage };
