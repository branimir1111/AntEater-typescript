import { StatusCodes } from 'http-status-codes';

const updateMessage = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is updateMessage controller' });
};

export { updateMessage };
