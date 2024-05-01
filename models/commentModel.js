import mongoose, { Schema } from 'mongoose';

const CommentModel = new Schema(
  {
    refersTo: { type: mongoose.Types.ObjectId },
    text: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Comment', CommentModel);
