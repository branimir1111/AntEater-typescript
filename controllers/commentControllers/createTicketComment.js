import { StatusCodes } from 'http-status-codes';
import CommentTicketModel from '../../models/commentTicketModel.js';
import mongoose from 'mongoose';

const createTicketComment = async (req, res) => {
  const createdTicketComment = await CommentTicketModel.create(req.body);

  const [newTicketComment] = await CommentTicketModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(createdTicketComment._id) } },
  ]);

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Comment for ticket created', newTicketComment });
};
export { createTicketComment };
