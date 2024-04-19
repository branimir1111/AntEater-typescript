import User from '../../models/userModel.js';
import { hashPassword } from '../../utils/passwordUtils.js';
import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';

const register = async (req, res) => {
  const user = req.body;

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    user.avatar = response.secure_url;
    user.avatarPublicId = response.public_id;
  }
  const isFirstUser = (await User.countDocuments()) === 0;
  user.role = isFirstUser ? 'admin' : 'developer';
  const hashedPassword = await hashPassword(user.password);
  user.password = hashedPassword;
  const newUser = await User.create(user);
  res.status(StatusCodes.CREATED).json({ msg: 'User successfully created' });
};

export { register };
