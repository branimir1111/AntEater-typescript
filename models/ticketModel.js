import mongoose, { Schema } from 'mongoose';

const TicketModel = new Schema(
  {
    title: String,
    description: String,
    assignedTo: { type: mongoose.Types.ObjectId, ref: 'User' },
    projectId: { type: mongoose.Types.ObjectId, ref: 'Project' },
    // comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    ticketType: {
      type: String,
      enum: ['feature', 'improvement', 'security', 'bug'],
      default: 'feature',
    },
    priority: {
      type: String,
      enum: ['urgent', 'high', 'medium', 'low'],
      default: 'low',
    },
    status: {
      type: String,
      enum: [
        'new',
        'in progress',
        'under review',
        'rejected',
        'cancelled',
        'completed',
      ],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Ticket', TicketModel);
