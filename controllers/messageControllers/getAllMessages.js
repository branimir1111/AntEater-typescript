import { StatusCodes } from 'http-status-codes';
import UserModel from '../../models/userModel.js';
import mongoose from 'mongoose';

const getAllMessages = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user.userId);

  const allUserMessages = await UserModel.aggregate([
    { $match: { _id: { $ne: userId }, role: { $ne: 'admin' } } },
    {
      $lookup: {
        from: 'messages',
        let: { userId: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $or: [
                  {
                    $and: [
                      { $eq: ['$senderId', '$$userId'] },
                      { $eq: ['$receiverId', userId] },
                    ],
                  },
                  {
                    $and: [
                      { $eq: ['$receiverId', '$$userId'] },
                      { $eq: ['$senderId', userId] },
                    ],
                  },
                ],
              },
            },
          },
          {
            $lookup: {
              from: 'users',
              localField: 'senderId',
              foreignField: '_id',
              as: 'senderDetails',
            },
          },
          {
            $lookup: {
              from: 'users',
              localField: 'receiverId',
              foreignField: '_id',
              as: 'receiverDetails',
            },
          },
          {
            $unwind: {
              path: '$senderDetails',
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $unwind: {
              path: '$receiverDetails',
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              _id: 1,
              senderId: 1,
              receiverId: 1,
              text: 1,
              createdAt: 1,
              updatedAt: 1,
              senderDetails: {
                _id: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                role: 1,
                avatar: 1,
              },
              receiverDetails: {
                _id: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                role: 1,
                avatar: 1,
              },
            },
          },
        ],
        as: 'messages',
      },
    },
    {
      $project: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        role: 1,
        avatar: 1,
        messages: 1,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ allUserMessages });
};

export { getAllMessages };
