import projectModel from '../../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';
import { usersFromPosts } from '../../utils/aggregations.js';

const getSingleProject = async (req, res) => {
  const singleProjectId = req.params;
  const oneProject = await projectModel.findById({
    _id: singleProjectId.id,
  });

  let queryObject = {};
  queryObject._id = oneProject._id;
  const [singleProject] = await projectModel.aggregate([
    {
      $match: queryObject,
    },
    ...usersFromPosts,
  ]);

  res.status(StatusCodes.OK).json({ singleProject });
};

export { getSingleProject };
