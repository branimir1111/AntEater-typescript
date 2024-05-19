import mongoose, { Schema } from 'mongoose';

const CommentTaskModel = new Schema(
  {
    createdBy: { type: mongoose.Types.ObjectId },
    taskId: { type: mongoose.Types.ObjectId },
    text: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('CommentTask', CommentTaskModel);
