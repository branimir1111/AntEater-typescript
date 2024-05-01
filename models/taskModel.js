import mongoose, { Schema } from 'mongoose';

const TaskModel = new Schema(
  {
    title: String,
    description: String,
    assignedTo: { type: mongoose.Types.ObjectId, ref: 'User' },
    projectId: { type: mongoose.Types.ObjectId, ref: 'Project' },
    tickets: [{ type: mongoose.Types.ObjectId, ref: 'Ticket' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    taskType: {
      type: String,
      enum: ['planning', 'design', 'coding', 'testing', 'administration'],
    },
    priority: { type: String, enum: ['high', 'medium', 'low'] },
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

export default mongoose.model('Task', TaskModel);