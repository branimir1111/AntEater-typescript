import User from '../models/userModel.js';
import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
import { createJWT } from '../utils/tokenUtils.js';
import { StatusCodes } from 'http-status-codes';
import { NotFound, Unauthenticated } from '../errors/customErrors.js';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';

// REGISTER
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

// LOGIN
const login = async (req, res) => {
  const user = req.body;
  const userExists = await User.findOne({ email: user.email });
  if (!userExists) {
    throw new NotFound('User does not exist');
  }
  const isValidPass = await comparePassword(user.password, userExists.password);
  if (!isValidPass) {
    throw new Unauthenticated('Passwords do not match');
  }

  const token = createJWT({
    userId: userExists._id,
    role: userExists.role,
    firstName: userExists.firstName,
    lastName: userExists.lastName,
  });

  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('ant_eater', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(StatusCodes.OK).json({ user: userExists, msg: 'User logged in' });
};

// LOGOUT
const logout = async (req, res) => {
  res.cookie('ant_eater', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'User is LOGOUT!' });
};

export { register, login, logout };
