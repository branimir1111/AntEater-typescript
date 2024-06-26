import { StatusCodes } from 'http-status-codes';
import MessageModel from '../../models/messageModel.js';

const updateMessage = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedMessage = await MessageModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Message successfully updated', updatedMessage });
};

export { updateMessage };
