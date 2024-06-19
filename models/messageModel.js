import mongoose, { Schema } from 'mongoose';

const MessageModel = new Schema(
  {
    senderId: { type: mongoose.Types.ObjectId, ref: 'User' },
    receiverId: { type: mongoose.Types.ObjectId, ref: 'User' },
    text: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Message', MessageModel);
