import mongoose, { Schema } from 'mongoose';

const CommentTicketModel = new Schema(
  {
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
    ticketId: { type: mongoose.Types.ObjectId, ref: 'Task' },
    projectId: { type: mongoose.Types.ObjectId, ref: 'Project' },
    text: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('CommentTicket', CommentTicketModel);
