import mongoose, { Schema } from 'mongoose';

const CommentTicketModel = new Schema(
  {
    createdBy: { type: mongoose.Types.ObjectId },
    ticketId: { type: mongoose.Types.ObjectId },
    projectId: { type: mongoose.Types.ObjectId },
    text: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('CommentTicket', CommentTicketModel);
