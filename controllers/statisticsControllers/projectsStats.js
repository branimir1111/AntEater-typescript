import { StatusCodes } from 'http-status-codes';
import ProjectModel from '../../models/ProjectModel.js';
import TaskModel from '../../models/taskModel.js';

const getProjectsStats = async (req, res) => {
  let projectStats = await ProjectModel.aggregate([
    { $match: {} },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);

  projectStats = projectStats.reduce((acc, curr) => {
    const { _id: status, count } = curr;
    acc[status] = count;
    return acc;
  }, {});

  const projectsByStatus = {
    active: projectStats.active || 0,
    inactive: projectStats.inactive || 0,
    completed: projectStats.completed || 0,
    testing: projectStats.testing || 0,
    pending: projectStats.pending || 0,
    canceled: projectStats.canceled || 0,
    delayed: projectStats.delayed || 0,
  };

  const numOfAllProjects = await ProjectModel.countDocuments();

  res.status(StatusCodes.OK).json({ numOfAllProjects, projectsByStatus });
};

export { getProjectsStats };
