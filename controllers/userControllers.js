import UserModel from '../models/userModel.js';
import { StatusCodes } from 'http-status-codes';
import { formatImage } from '../middleware/multerMiddleware.js';
import cloudinary from 'cloudinary';

const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  delete newUser.role;

  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const updateUser = await UserModel.findByIdAndUpdate(
    req.user.userId,
    newUser
  );

  if (req.file && updateUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updateUser.avatarPublicId);
  }

  res
    .status(StatusCodes.CREATED)
    .json({ user: updateUser, msg: 'User successfully updated' });
};

const getAllUsers = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  const allPM = await UserModel.find({ role: 'projectmanager' });
  const allDevs = await UserModel.find({ role: 'developer' });
  const countPM = allPM.length;
  const countDevs = allDevs.length;

  const numOfPages = Math.ceil(countDevs / limit);

  res.status(StatusCodes.OK).json({
    devs: allDevs,
    pms: allPM,
    countPM,
    countDevs,
    numOfPages,
    currentPage: page,
  });
};

const getCurrentUser = async (req, res) => {
  const user = await UserModel.findById({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ currentUser: userWithoutPassword });
};

const deleteUser = async (req, res) => {
  await UserModel.findByIdAndDelete(req.user.userId);
  res.status(StatusCodes.OK).json({ msg: 'User successfully deleted!' });
};

export { getAllUsers, getCurrentUser, updateUser, deleteUser };
