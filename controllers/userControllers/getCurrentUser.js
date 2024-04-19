import UserModel from '../../models/userModel.js';
import { StatusCodes } from 'http-status-codes';

const getCurrentUser = async (req, res) => {
  const user = await UserModel.findById({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ currentUser: userWithoutPassword });
};

export { getCurrentUser };
