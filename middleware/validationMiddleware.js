import mongoose from 'mongoose';
import UserModel from '../models/userModel.js';
import { body, validationResult } from 'express-validator';
import {
  BadRequest,
  Unauthorized,
  Unauthenticated,
  NotFound,
} from '../errors/customErrors.js';
import ProjectModel from '../models/ProjectModel.js';
import TaskModel from '../models/taskModel.js';

const validationWithErrors = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        const firstMessage = errorMessages[0];
        throw new BadRequest(firstMessage);
      }
      next();
    },
  ];
};

export const validateRegistration = validationWithErrors([
  body('firstName').notEmpty().withMessage('First Name is required'),
  body('lastName'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .custom(async (email) => {
      const user = await UserModel.findOne({ email });
      if (user) {
        throw new BadRequest('User already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
]);

export const validateLogin = validationWithErrors([
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required'),
]);

export const validateUpdateUser = validationWithErrors([
  body('firstName').notEmpty().withMessage('First Name is required'),
  body('lastName').notEmpty().withMessage('Last Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .custom(async (email, { req }) => {
      const user = await UserModel.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequest('User already exists');
      }
    }),
]);

export const validateNewProject = validationWithErrors([
  body('projectName')
    .notEmpty()
    .withMessage('Project Name is required')
    .custom(async (projectName, { req }) => {
      const project = await ProjectModel.findOne({ projectName });
      if (project) {
        throw new BadRequest('Project with this name already exists');
      }
    }),
  body('description').notEmpty().withMessage('Description is required'),
  body('projectManager')
    .notEmpty()
    .withMessage('You must choose Project manager'),
  body('teamMembers')
    .notEmpty()
    .withMessage('You must select at least one developer'),
]);

export const validateNewTask = validationWithErrors([
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('assignedTo')
    .notEmpty()
    .withMessage('You need to assign a task to someone'),
  body('projectId')
    .notEmpty()
    .withMessage('The project assigned task is missing.')
    .custom(async (_id, { req }) => {
      const project = await ProjectModel.findById({
        _id: new mongoose.Types.ObjectId(_id),
      });
      if (!project) {
        throw new BadRequest('Project does not exists');
      }
    }),
]);

export const validateNewTicket = validationWithErrors([
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('assignedTo')
    .notEmpty()
    .withMessage('You need to assign a ticket to someone'),
  body('taskId')
    .notEmpty()
    .withMessage('The task assigned ticket is missing.')
    .custom(async (_id, { req }) => {
      const task = await TaskModel.findById({
        _id: new mongoose.Types.ObjectId(_id),
      });
      if (!task) {
        throw new BadRequest('Task does not exists');
      }
    }),
]);
