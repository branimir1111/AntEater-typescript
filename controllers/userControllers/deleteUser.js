import UserModel from '../../models/userModel.js';
import { StatusCodes } from 'http-status-codes';

const deleteUser = async (req, res) => {
  await UserModel.findByIdAndDelete(req.user.userId);
  res.status(StatusCodes.OK).json({ msg: 'User successfully deleted!' });
};

export { deleteUser };
