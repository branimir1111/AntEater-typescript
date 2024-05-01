import mongoose, { Schema } from 'mongoose';

const TicketModel = new Schema(
  {
    title: String,
    description: String,
    assignedTo: { type: mongoose.Types.ObjectId, ref: 'User' },
    projectId: { type: mongoose.Types.ObjectId, ref: 'Project' },
    taskId: { type: mongoose.Types.ObjectId, ref: 'Task' },
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    ticketType: {
      type: String,
      enum: ['feature', 'improvement', 'security', 'bug'],
    },
    priority: { type: String, enum: ['urgent', 'high', 'medium', 'low'] },
    status: {
      type: String,
      enum: [
        'new',
        'inProgress',
        'underReview',
        'rejected',
        'cancelled',
        'completed',
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Ticket', TicketModel);
