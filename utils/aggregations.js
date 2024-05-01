export const usersFromPosts = [
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
