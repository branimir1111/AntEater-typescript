import mongoose, { Schema } from 'mongoose';

const CommentTaskModel = new Schema(
  {
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
    taskId: { type: mongoose.Types.ObjectId, ref: 'Ticket' },
    projectId: { type: mongoose.Types.ObjectId, ref: 'Project' },
    text: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('CommentTask', CommentTaskModel);
