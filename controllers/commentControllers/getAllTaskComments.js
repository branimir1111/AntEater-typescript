import { StatusCodes } from 'http-status-codes';
import CommentTaskModel from '../../models/commentTaskModel.js';
import { userProjectAndTaskFromTaskComment } from '../../utils/aggregations.js';
import ProjectModel from '../../models/ProjectModel.js';

const getAllTaskComments = async (req, res) => {
  const projectsWithTasksAndComments = await ProjectModel.aggregate([
    {
      $lookup: {
        from: 'tasks', // Naziv kolekcije za taskove
        localField: '_id',
        foreignField: 'projectId',
        as: 'tasks',
      },
    },
    {
      $unwind: {
        path: '$tasks',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'commenttasks', // Naziv kolekcije za komentare taskova
        localField: 'tasks._id',
        foreignField: 'taskId',
        as: 'tasks.comments',
      },
    },
    {
      $group: {
        _id: '$_id',
        projectName: { $first: '$projectName' },
        description: { $first: '$description' },
        createdBy: { $first: '$createdBy' },
        projectManager: { $first: '$projectManager' },
        teamMembers: { $first: '$teamMembers' },
        status: { $first: '$status' },
        tasks: { $push: '$tasks' },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  const numOfProjects = projectsWithTasksAndComments.length;

  // const allTaskComments = await CommentTaskModel.aggregate([
  //   ...userProjectAndTaskFromTaskComment,
  // ]);

  // const numOfTaskComments = allTaskComments.length;
  // res.status(StatusCodes.OK).json({ numOfTaskComments, allTaskComments });

  res
    .status(StatusCodes.OK)
    .json({ numOfProjects, projectsWithTasksAndComments });
};
export { getAllTaskComments };
