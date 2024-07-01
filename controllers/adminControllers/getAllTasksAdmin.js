import { StatusCodes } from 'http-status-codes';
import TaskModel from '../../models/taskModel.js';
import { userAndProjectFromTask } from '../../utils/aggregations.js';

const getAllTasksAdmin = async (req, res) => {
  const {
    search,
    taskType,
    priority,
    status,
    sort,
    limit: itemsPerPage,
    page: currPage,
  } = req.query;

  let queryObject = {};

  if (search) {
    queryObject.search = { $regex: search, $options: 'i' };
  }
  if (taskType && taskType !== 'all') {
    queryObject.taskType = taskType;
  }
  if (priority && priority !== 'all') {
    queryObject.priority = priority;
  }
  if (status && status !== 'all') {
    queryObject.status = status;
  }

  const sortOptions = {
    newest: { createdAt: -1 },
    oldest: { createdAt: 1 },
    'a-z': { title: 1 },
    'z-a': { title: -1 },
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  const limit = Number(itemsPerPage) || 5;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allAdminTasks = await TaskModel.aggregate([
    { $match: queryObject },
    ...userAndProjectFromTask,
    { $sort: sortKey },
    { $skip: skip },
    { $limit: limit },
  ]);

  const totalCountResult = await TaskModel.aggregate([
    { $match: queryObject },
    { $count: 'totalTasks' },
  ]);

  const numOfFilteredTasks =
    totalCountResult.length > 0 ? totalCountResult[0].totalTasks : 0;
  const numOfPages = Math.ceil(numOfFilteredTasks / limit);
  const numOfAllTasks = await TaskModel.countDocuments();

  res.status(StatusCodes.OK).json({
    numOfAllTasks,
    numOfPages,
    currentPage: page,
    allAdminTasks,
  });
};

export { getAllTasksAdmin };
