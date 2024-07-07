import { StatusCodes } from 'http-status-codes';
import ProjectModel from '../../models/ProjectModel.js';

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

  const projectsByStatus = [
    { status: 'active', projects: projectStats.active || 0 },
    { status: 'inactive', projects: projectStats.inactive || 0 },
    { status: 'completed', projects: projectStats.completed || 0 },
    { status: 'testing', projects: projectStats.testing || 0 },
    { status: 'pending', projects: projectStats.pending || 0 },
    { status: 'canceled', projects: projectStats.canceled || 0 },
    { status: 'delayed', projects: projectStats.delayed || 0 },
  ];

  const numOfAllProjects = await ProjectModel.countDocuments();

  res.status(StatusCodes.OK).json({ numOfAllProjects, projectsByStatus });
};

export { getProjectsStats };
