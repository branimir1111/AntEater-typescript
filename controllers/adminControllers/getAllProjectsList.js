import { StatusCodes } from 'http-status-codes';
import ProjectModel from '../../models/ProjectModel.js';

const getAllProjectsList = async (req, res) => {
  const allProjectsList = await ProjectModel.find({});
  const numOfAllProjects = allProjectsList.length;

  res.status(StatusCodes.OK).json({ numOfAllProjects, allProjectsList });
};
export { getAllProjectsList };
