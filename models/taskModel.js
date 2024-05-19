import mongoose, { Schema } from 'mongoose';

const TaskModel = new Schema(
  {
    title: String,
    description: String,
    assignedTo: { type: mongoose.Types.ObjectId, ref: 'User' },
    projectId: { type: mongoose.Types.ObjectId, ref: 'Project' },
    taskType: {
      type: String,
      enum: ['planning', 'design', 'coding', 'testing', 'administration'],
      default: 'planning',
    },
    priority: { type: String, enum: ['high', 'medium', 'low'], default: 'low' },
    status: {
      type: String,
      enum: ['new', 'in progress', 'under review', 'refactor', 'completed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Task', TaskModel);
