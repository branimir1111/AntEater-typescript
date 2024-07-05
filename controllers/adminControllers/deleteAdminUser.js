import { StatusCodes } from 'http-status-codes';
import UserModel from '../../models/userModel.js';
import mongoose from 'mongoose';

const deleteAdminUser = async (req, res) => {
  const { id } = req.params;
  await UserModel.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id) });
  res.status(StatusCodes.OK).json({ msg: 'User deleted successfully' });
};

export { deleteAdminUser };
