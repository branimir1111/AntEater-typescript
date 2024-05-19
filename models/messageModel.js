import mongoose, { Schema } from 'mongoose';

const MessageModel = new Schema(
  {
    sendBy: { type: mongoose.Types.ObjectId },
    userId: { type: mongoose.Types.ObjectId, ref: 'User' },
    text: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Message', MessageModel);
