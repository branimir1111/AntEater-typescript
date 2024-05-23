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
      from: 'users',
      localField: 'createdBy',
      foreignField: '_id',
      as: 'createdByUser',
    },
  },
  {
    $lookup: {
      from: 'tasks',
      localField: 'taskId',
      foreignField: '_id',
      as: 'forTask',
    },
  },
  {
    $lookup: {
      from: 'projects',
      localField: 'projectId',
      foreignField: '_id',
      as: 'forProject',
    },
  },
  {
    $addFields: {
      createdBy: {
        $arrayElemAt: ['$createdByUser', 0],
      },
      taskId: {
        $arrayElemAt: ['$forTask', 0],
      },
      projectId: {
        $arrayElemAt: ['$forProject', 0],
      },
    },
  },
  {
    $project: {
      title: 1,
      description: 1,
      createdBy: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        avatar: 1,
      },
      taskId: {
        _id: 1,
        title: 1,
        description: 1,
        taskType: 1,
        priority: 1,
        status: 1,
      },
      projectId: {
        _id: 1,
        projectName: 1,
        description: 1,
        status: 1,
      },
      text: 1,
      createdAt: 1,
      updatedAt: 1,
    },
  },
];
