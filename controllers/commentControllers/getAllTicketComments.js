import { StatusCodes } from 'http-status-codes';
import { userProjectAndTicketFromTicketComment } from '../../utils/aggregations.js';
import ProjectModel from '../../models/ProjectModel.js';

const getAllTicketComments = async (req, res) => {
  const projectsWithTicketsAndComments = await ProjectModel.aggregate([
    ...userProjectAndTicketFromTicketComment,
  ]);

  const numOfProjects = projectsWithTicketsAndComments.length;

  res
    .status(StatusCodes.OK)
    .json({ numOfProjects, projectsWithTicketsAndComments });
};
export { getAllTicketComments };
