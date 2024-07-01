export const usersFromProject = [
  {
    $lookup: {
      from: 'users',
      localField: 'createdBy',
      foreignField: '_id',
      as: 'createdByUser',
    },
  },
  {
    $lookup: {
      from: 'users',
      localField: 'projectManager',
      foreignField: '_id',
      as: 'projectManagerUser',
    },
  },
  {
    $lookup: {
      from: 'users',
      localField: 'teamMembers',
      foreignField: '_id',
      as: 'teamMembersUser',
    },
  },
  {
    $addFields: {
      createdBy: {
        $arrayElemAt: ['$createdByUser', 0],
      },
      projectManager: {
        $arrayElemAt: ['$projectManagerUser', 0],
      },
      teamMembers: '$teamMembersUser',
    },
  },
  {
    $project: {
      projectName: 1,
      description: 1,
      createdBy: { _id: 1, firstName: 1, lastName: 1 },
      projectManager: { _id: 1, firstName: 1, lastName: 1 },
      teamMembers: {
        $map: {
          input: '$teamMembers',
          as: 'member',
          in: {
            _id: '$$member._id',
            firstName: '$$member.firstName',
            lastName: '$$member.lastName',
          },
        },
      },
      status: 1,
      projectTickets: 1,
      projectTasks: 1,
      createdAt: 1,
      updatedAt: 1,
    },
  },
];
export const userAndProjectFromTask = [
  {
    $lookup: {
      from: 'users',
      localField: 'assignedTo',
      foreignField: '_id',
      as: 'assignedToUser',
    },
  },
  {
    $lookup: {
      from: 'projects',
      localField: 'projectId',
      foreignField: '_id',
      as: 'projectIdProject',
    },
  },
  {
    $addFields: {
      assignedTo: {
        $arrayElemAt: ['$assignedToUser', 0],
      },
      projectId: {
        $arrayElemAt: ['$projectIdProject', 0],
      },
    },
  },
  {
    $project: {
      title: 1,
      description: 1,
      assignedTo: { _id: 1, firstName: 1, lastName: 1, avatar: 1 },
      projectId: {
        _id: 1,
        projectName: 1,
        description: 1,
        status: 1,
      },
      tickets: 1,
      comments: 1,
      taskType: 1,
      priority: 1,
      status: 1,
      createdAt: 1,
      updatedAt: 1,
    },
  },
];
export const userProjectAndTaskFromTicket = [
  {
    $lookup: {
      from: 'users',
      localField: 'assignedTo',
      foreignField: '_id',
      as: 'assignedToUser',
    },
  },
  {
    $lookup: {
      from: 'projects',
      localField: 'projectId',
      foreignField: '_id',
      as: 'projectIdTickets',
    },
  },
  {
    $addFields: {
      assignedTo: {
        $arrayElemAt: ['$assignedToUser', 0],
      },
      projectId: {
        $arrayElemAt: ['$projectIdTickets', 0],
      },
    },
  },
  {
    $project: {
      title: 1,
      description: 1,
      assignedTo: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        avatar: 1,
      },
      projectId: {
        _id: 1,
        projectName: 1,
        description: 1,
        status: 1,
      },
      ticketType: 1,
      priority: 1,
      status: 1,
      createdAt: 1,
      updatedAt: 1,
    },
  },
];
export const userProjectAndTaskFromTaskComment = [
  {
    $lookup: {
      from: 'tasks',
      localField: '_id',
      foreignField: 'projectId',
      as: 'tasks',
    },
  },
  {
    $unwind: {
      path: '$tasks',
      preserveNullAndEmptyArrays: false,
    },
  },
  {
    $lookup: {
      from: 'commenttasks',
      let: { taskId: '$tasks._id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ['$taskId', '$$taskId'] },
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'createdBy',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $unwind: {
            path: '$user',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 1,
            text: 1,
            createdAt: 1,
            createdBy: 1,
            'user._id': 1,
            'user.firstName': 1,
            'user.lastName': 1,
            'user.email': 1,
            'user.role': 1,
            'user.avatar': 1,
          },
        },
        {
          $addFields: {
            user: {
              _id: '$user._id',
              firstName: '$user.firstName',
              lastName: '$user.lastName',
              email: '$user.email',
              role: '$user.role',
              avatar: '$user.avatar',
            },
          },
        },
      ],
      as: 'tasks.comments',
    },
  },
  {
    $group: {
      _id: '$_id',
      projectName: { $first: '$projectName' },
      status: { $first: '$status' },
      tasks: {
        $push: {
          _id: '$tasks._id',
          title: '$tasks.title',
          taskType: '$tasks.taskType',
          priority: '$tasks.priority',
          status: '$tasks.status',
          comments: '$tasks.comments',
        },
      },
    },
  },
  {
    $sort: { createdAt: -1 },
  },
];
export const userProjectAndTicketFromTicketComment = [
  {
    $lookup: {
      from: 'tickets',
      localField: '_id',
      foreignField: 'projectId',
      as: 'tickets',
    },
  },
  {
    $unwind: {
      path: '$tickets',
      preserveNullAndEmptyArrays: false,
    },
  },
  {
    $lookup: {
      from: 'commenttickets',
      let: { ticketId: '$tickets._id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ['$ticketId', '$$ticketId'] },
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'createdBy',
            foreignField: '_id',
            as: 'user',
          },
        },
        {
          $unwind: {
            path: '$user',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 1,
            text: 1,
            createdAt: 1,
            createdBy: 1,
            'user._id': 1,
            'user.firstName': 1,
            'user.lastName': 1,
            'user.email': 1,
            'user.role': 1,
            'user.avatar': 1,
          },
        },
        {
          $addFields: {
            user: {
              _id: '$user._id',
              firstName: '$user.firstName',
              lastName: '$user.lastName',
              email: '$user.email',
              role: '$user.role',
              avatar: '$user.avatar',
            },
          },
        },
      ],
      as: 'tickets.comments',
    },
  },
  {
    $group: {
      _id: '$_id',
      projectName: { $first: '$projectName' },
      status: { $first: '$status' },
      tickets: {
        $push: {
          _id: '$tickets._id',
          title: '$tickets.title',
          ticketType: '$tickets.ticketType',
          priority: '$tickets.priority',
          status: '$tickets.status',
          comments: '$tickets.comments',
        },
      },
    },
  },
  {
    $sort: { createdAt: -1 },
  },
];
export const allAdminTaskCommentsAggregation = [
  {
    $lookup: {
      from: 'users',
      localField: 'createdBy',
      foreignField: '_id',
      as: 'creatorDetails',
    },
  },
  { $unwind: '$creatorDetails' },

  {
    $lookup: {
      from: 'tasks',
      localField: 'taskId',
      foreignField: '_id',
      as: 'taskDetails',
    },
  },
  { $unwind: '$taskDetails' },

  {
    $lookup: {
      from: 'projects',
      localField: 'projectId',
      foreignField: '_id',
      as: 'projectDetails',
    },
  },
  { $unwind: '$projectDetails' },
  {
    $project: {
      _id: 1,
      text: 1,
      createdAt: 1,
      updatedAt: 1,
      'creatorDetails._id': 1,
      'creatorDetails.firstName': 1,
      'creatorDetails.lastName': 1,
      'creatorDetails.role': 1,
      'creatorDetails.avatar': 1,
      'taskDetails._id': 1,
      'taskDetails.title': 1,
      'taskDetails.taskType': 1,
      'taskDetails.priority': 1,
      'taskDetails.status': 1,
      'projectDetails._id': 1,
      'projectDetails.projectName': 1,
      'projectDetails.status': 1,
    },
  },
];
export const allAdminTicketCommentsAggregation = [
  {
    $lookup: {
      from: 'users',
      localField: 'createdBy',
      foreignField: '_id',
      as: 'creatorDetails',
    },
  },
  { $unwind: '$creatorDetails' },

  {
    $lookup: {
      // from: 'tasks',
      from: 'tickets',
      // localField: 'taskId',
      localField: 'ticketId',
      foreignField: '_id',
      // as: 'taskDetails',
      as: 'ticketDetails',
    },
  },
  // { $unwind: '$taskDetails' },
  { $unwind: '$ticketDetails' },

  {
    $lookup: {
      from: 'projects',
      localField: 'projectId',
      foreignField: '_id',
      as: 'projectDetails',
    },
  },
  { $unwind: '$projectDetails' },
  {
    $project: {
      _id: 1,
      text: 1,
      createdAt: 1,
      updatedAt: 1,
      'creatorDetails._id': 1,
      'creatorDetails.firstName': 1,
      'creatorDetails.lastName': 1,
      'creatorDetails.role': 1,
      'creatorDetails.avatar': 1,
      'ticketDetails._id': 1,
      'ticketDetails.title': 1,
      'ticketDetails.taskType': 1,
      'ticketDetails.priority': 1,
      'ticketDetails.status': 1,
      'projectDetails._id': 1,
      'projectDetails.projectName': 1,
      'projectDetails.status': 1,
    },
  },
];
export const allAdminMessagesAggregation = [
  {
    $lookup: {
      from: 'users',
      localField: 'senderId',
      foreignField: '_id',
      as: 'senderDetails',
    },
  },
  { $unwind: '$senderDetails' },
  {
    $lookup: {
      from: 'users',
      localField: 'receiverId',
      foreignField: '_id',
      as: 'receiverDetails',
    },
  },
  { $unwind: '$receiverDetails' },
  {
    $project: {
      _id: 1,
      text: 1,
      createdAt: 1,
      updatedAt: 1,
      'senderDetails._id': 1,
      'senderDetails.firstName': 1,
      'senderDetails.lastName': 1,
      'senderDetails.role': 1,
      'senderDetails.avatar': 1,
      'receiverDetails._id': 1,
      'receiverDetails.firstName': 1,
      'receiverDetails.lastName': 1,
      'receiverDetails.role': 1,
      'receiverDetails.avatar': 1,
    },
  },
];
