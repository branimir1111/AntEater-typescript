import { StatusCodes } from 'http-status-codes';
import UserModel from '../../models/userModel.js';
// import MessageModel from '../../models/messageModel.js';
import mongoose from 'mongoose';

const getAllMessages = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user.userId);

  const allUsersMessages = await UserModel.aggregate([
    // Prvi korak: Pronađi sve korisnike
    { $match: {} },

    // Drugi korak: Pronađi poruke koje su poslali meni ili koje sam ja poslao njima
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
        ],
        as: 'messages',
      },
    },

    // Treći korak: Pronađi informacije o korisnicima koji su poslali poruke meni
    {
      $lookup: {
        from: 'users',
        localField: 'messages.senderId',
        foreignField: '_id',
        as: 'senders',
      },
    },

    // Četvrti korak: Pronađi informacije o korisnicima kojima sam ja poslao poruke
    {
      $lookup: {
        from: 'users',
        localField: 'messages.receiverId',
        foreignField: '_id',
        as: 'receivers',
      },
    },

    // Peti korak: Formatiraj rezultat kako bi bio pregledniji
    {
      $project: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        role: 1,
        avatar: 1,
        messages: 1,
        senders: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          role: 1,
          avatar: 1,
        },
        receivers: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          role: 1,
          avatar: 1,
        },
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ allUsersMessages });
};

export { getAllMessages };
