import User from '../../models/userModel.js';
import { comparePassword } from '../../utils/passwordUtils.js';
import { createJWT } from '../../utils/tokenUtils.js';
import { StatusCodes } from 'http-status-codes';
import { NotFound, Unauthenticated } from '../../errors/customErrors.js';

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

export { login };
