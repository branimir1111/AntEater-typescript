import mongoose, { Schema } from 'mongoose';

const ProjectModel = new Schema(
  {
    projectName: { type: String, required: true },
    description: String,
    createdBy: {
      _id: { type: mongoose.Types.ObjectId, ref: 'User' },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    projectManager: {
      _id: { type: mongoose.Types.ObjectId, ref: 'User' },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    teamMembers: [
      {
        _id: { type: mongoose.Types.ObjectId, ref: 'User' },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
      },
    ],
    status: {
      type: String,
      enum: [
        'active',
        'inactive',
        'completed',
        'testing',
        'pending',
        'canceled',
        'delayed',
      ],
      default: 'active',
    },
    projectBugs: [{ type: mongoose.Types.ObjectId, ref: 'Bug' }],
    projectTasks: [{ type: mongoose.Types.ObjectId, ref: 'Task' }],
  },
  { timestamps: true }
);

export default mongoose.model('Project', ProjectModel);
