import mongoose, { Schema } from 'mongoose';

const ProjectModel = new Schema(
  {
    projectName: { type: String, required: true },
    description: String,
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User' },
    projectManager: { type: mongoose.Types.ObjectId, ref: 'User' },
    teamMembers: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
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
