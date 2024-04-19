import UserModel from '../../models/userModel.js';
import { StatusCodes } from 'http-status-codes';

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

export { getAllUsers };
