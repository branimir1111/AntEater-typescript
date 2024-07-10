import { StatusCodes } from 'http-status-codes';
import { userProjectAndTaskFromTaskComment } from '../../utils/aggregations.js';
import ProjectModel from '../../models/projectModel.js';

const getAllTaskComments = async (req, res) => {
  const projectsWithTasksAndComments = await ProjectModel.aggregate([
    ...userProjectAndTaskFromTaskComment,
  ]);

  const numOfProjects = projectsWithTasksAndComments.length;

  res
    .status(StatusCodes.OK)
    .json({ numOfProjects, projectsWithTasksAndComments });
};
export { getAllTaskComments };
