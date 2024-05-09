import ProjectModel from '../../models/ProjectModel.js';
import { StatusCodes } from 'http-status-codes';
import { usersFromProject } from '../../utils/aggregations.js';

const getAllProjects = async (req, res) => {
  const {
    search,
    status,
    sort,
    page: currPage,
    limit: itemsPerPage,
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

  if (itemsPerPage !== 'all') {
    const limit = Number(itemsPerPage) || 3;
    const page = Number(currPage) || 1;
    const skip = (page - 1) * limit;

    const allProjects = await ProjectModel.aggregate([
      {
        $match: queryObject,
      },
      ...usersFromProject,
      {
        $sort: sortKey,
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);
    const filteredProjects = [
      { $match: queryObject },
      { $count: 'totalProjects' },
    ];
    const totalCountResult = await ProjectModel.aggregate(filteredProjects);
    const numOfFilteredProjects =
      totalCountResult.length > 0 ? totalCountResult[0].totalProjects : 0;
    const numOfAllProjects = await ProjectModel.countDocuments();
    const numOfPages = Math.ceil(numOfFilteredProjects / limit);

    res.status(StatusCodes.OK).json({
      numOfAllProjects,
      numOfFilteredProjects,
      numOfPages,
      currentPage: page,
      allProjects,
    });
  } else {
    const allProjects = await ProjectModel.aggregate([
      {
        $match: queryObject,
      },
      ...usersFromProject,
      {
        $sort: sortKey,
      },
    ]);

    const numOfAllProjects = await ProjectModel.countDocuments();

    res.status(StatusCodes.OK).json({
      numOfAllProjects,
      allProjects,
    });
  }
};

export { getAllProjects };
