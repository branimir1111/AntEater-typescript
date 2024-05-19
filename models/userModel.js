import mongoose, { Schema } from 'mongoose';

const UserModel = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ['admin', 'projectmanager', 'developer'],
      default: 'developer',
    },
    avatar: String,
    avatarPublicId: String,
  },
  { timestamps: true }
);

UserModel.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model('User', UserModel);
