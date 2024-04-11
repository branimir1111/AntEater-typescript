import projectModel from '../models/projectModel.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest } from '../errors/customErrors.js';

const getAllProjects = async (req, res) => {
  // Sorting
  const { search, status, sort, limit } = req.query;
  const queryObject = {};

  if (search) {
    queryObject.$or = [{ projectName: { $regex: search, $options: 'i' } }];
  }
  // Pagination
  const projects = await projectModel.find(queryObject);
  // const projects = await projectModel.find();
  res.status(StatusCodes.OK).json({ msg: 'Yeah baby!!!', projects });
};

// const page = Number(req.query.page) || 1;
// const limit = Number(req.query.limit) || 3;
// const skip = (page - 1) * limit;
// const allProjects = await projectModel.find({}).limit(limit).skip(skip);
// // const allProjects = await projectModel.find({});
// const numOfProjects = allProjects.length;
// const findAllProjects = await projectModel.find({});
// const countAllProjects = findAllProjects.length;
// const numOfPages = Math.ceil(numOfProjects / limit);
// res.status(StatusCodes.OK).json({
//   countAllProjects,
//   numOfProjects,
//   allProjects,
//   numOfPages,
//   currentPage: page,
// });

const getSingleProject = async (req, res) => {
  const singleProjectId = req.params;
  res
    .status(StatusCodes.OK)
    .json({ msg: `This is single project with id: ${singleProjectId}` });
};

const createProject = async (req, res) => {
  req.body.createdBy = {
    _id: req.user.userId,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
  };
  req.body.teamMembers = req.body.teamMembers.map((member) =>
    JSON.parse(member)
  );
  req.body.projectManager = JSON.parse(req.body.projectManager);
  const newProject = req.body;

  if (newProject.teamMembers.length < 1) {
    throw new BadRequest('You must select at least one developer');
  }
  const createdProject = await projectModel.create(newProject);
  res
    .status(StatusCodes.CREATED)
    .json({ project: createdProject, msg: 'Project successfully created!' });
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  await projectModel.findByIdAndDelete({ _id: id });

  res.status(StatusCodes.OK).json({ msg: 'Project deleted!' });
};

export { createProject, getAllProjects, getSingleProject, deleteProject };
