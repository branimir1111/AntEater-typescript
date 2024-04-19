import UserModel from '../../models/userModel.js';
import { StatusCodes } from 'http-status-codes';
import { formatImage } from '../../middleware/multerMiddleware.js';
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

export { updateUser };
