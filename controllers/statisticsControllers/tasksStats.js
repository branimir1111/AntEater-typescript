import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';

const getTasksStats = async (req, res) => {
  let taskTypeStats = await TaskModel.aggregate([
    { $match: {} },
    { $group: { _id: '$taskType', count: { $sum: 1 } } },
  ]);

  taskTypeStats = taskTypeStats.reduce((acc, curr) => {
    const { _id: taskType, count } = curr;
    acc[taskType] = count;
    return acc;
  }, {});

  const tasksByType = [
    { taskType: 'planning', tasks: taskTypeStats.planning || 0 },
    { taskType: 'design', tasks: taskTypeStats.design || 0 },
    { taskType: 'coding', tasks: taskTypeStats.coding || 0 },
    { taskType: 'testing', tasks: taskTypeStats.testing || 0 },
    { taskType: 'administration', tasks: taskTypeStats.administration || 0 },
  ];

  let taskPriorityStats = await TaskModel.aggregate([
    { $match: {} },
    { $group: { _id: '$priority', count: { $sum: 1 } } },
  ]);

  taskPriorityStats = taskPriorityStats.reduce((acc, curr) => {
    const { _id: priority, count } = curr;
    acc[priority] = count;
    return acc;
  }, {});

  const tasksByPriority = [
    { priority: 'high', tasks: taskPriorityStats.high || 0 },
    { priority: 'medium', tasks: taskPriorityStats.medium || 0 },
    { priority: 'low', tasks: taskPriorityStats.low || 0 },
  ];

  let taskStatusStats = await TaskModel.aggregate([
    { $match: {} },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);

  taskStatusStats = taskStatusStats.reduce((acc, curr) => {
    const { _id: status, count } = curr;
    acc[status] = count;
    return acc;
  }, {});

  const tasksByStatus = [
    { status: 'new', tasks: taskStatusStats.new || 0 },
    { status: 'in progress', tasks: taskStatusStats['in progress'] || 0 },
    { status: 'under review', tasks: taskStatusStats['under review'] || 0 },
    { status: 'refactor', tasks: taskStatusStats.refactor || 0 },
    { status: 'completed', tasks: taskStatusStats.completed || 0 },
  ];

  const numOfAllTasks = await TaskModel.countDocuments();

  res
    .status(StatusCodes.OK)
    .json({ numOfAllTasks, tasksByType, tasksByPriority, tasksByStatus });
};

export { getTasksStats };
