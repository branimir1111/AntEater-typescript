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
    $sort: { _id: 1 },
  },
];
export const userProjectAndTicketFromTicketComment = [
  {
    $lookup: {
      // from: 'tasks',
      from: 'tickets',
      localField: '_id',
      foreignField: 'projectId',
      // as: 'tasks',
      as: 'tickets',
    },
  },
  {
    $unwind: {
      // path: '$tasks',
      path: '$tickets',
      preserveNullAndEmptyArrays: false,
    },
  },
  {
    $lookup: {
      // from: 'commenttasks',
      from: 'commenttickets',
      // let: { taskId: '$tasks._id' },
      let: { ticketId: '$tickets._id' },
      pipeline: [
        {
          $match: {
            // $expr: { $eq: ['$taskId', '$$taskId'] },
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
      // as: 'tasks.comments',
      as: 'tickets.comments',
    },
  },
  {
    $group: {
      _id: '$_id',
      projectName: { $first: '$projectName' },
      status: { $first: '$status' },
      // tasks: {
      tickets: {
        $push: {
          // _id: '$tasks._id',
          // title: '$tasks.title',
          // taskType: '$tasks.taskType',
          // priority: '$tasks.priority',
          // status: '$tasks.status',
          // comments: '$tasks.comments',
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
    $sort: { _id: 1 },
  },
];
