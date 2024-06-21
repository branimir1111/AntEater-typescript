import { StatusCodes } from 'http-status-codes';

const deleteMessage = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'This is deleteMessage controller' });
};

export { deleteMessage };
