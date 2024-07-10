import { StatusCodes } from 'http-status-codes';
import ProjectModel from '../../models/projectModel.js';
import { usersFromProject } from '../../utils/aggregations.js';

const getAllProjectsAdmin = async (req, res) => {
  const {
    search,
    status,
    sort,
    limit: itemsPerPage,
    page: currPage,
  } = req.query;

  let queryObject = {};

  if (search) {
    queryObject.projectName = { $regex: search, $options: 'i' };
  }
  if (status && status !== 'all') {
    queryObject.status = status;
  }
  const sortOptions = {
    newest: { createdAt: -1 },
    oldest: { createdAt: 1 },
    'a-z': { projectName: 1 },
    'z-a': { projectName: -1 },
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  const limit = Number(itemsPerPage) || 5;
  const page = Number(currPage) || 1;
  const skip = (page - 1) * limit;

  const allAdminProjects = await ProjectModel.aggregate([
    { $match: queryObject },
    ...usersFromProject,
    { $sort: sortKey },
    { $skip: skip },
    { $limit: limit },
  ]);

  const totalCountResult = await ProjectModel.aggregate([
    { $match: queryObject },
    { $count: 'totalProjects' },
  ]);
  const numOfFilteredProjects =
    totalCountResult.length > 0 ? totalCountResult[0].totalProjects : 0;
  const numOfAllProjects = await ProjectModel.countDocuments();
  const numOfPages = Math.ceil(numOfFilteredProjects / limit);

  res.status(StatusCodes.OK).json({
    numOfAllProjects,
    numOfPages,
    currentPage: page,
    allAdminProjects,
  });
};
export { getAllProjectsAdmin };
