import 'express-async-errors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
const app = express();
import cloudinary from 'cloudinary';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import AuthRouter from './routes/authRoutes.js';
import UserRouter from './routes/userRoutes.js';
import ProjectRouter from './routes/projectRoutes.js';
import TaskRouter from './routes/taskRoutes.js';
import TicketRouter from './routes/ticketRoutes.js';
import CommentTaskRouter from './routes/commentTaskRoutes.js';
import CommentTicketRouter from './routes/commentTicketRoutes.js';
import MessageRouter from './routes/messageRoutes.js';
import AdminRouter from './routes/adminRoutes.js';
import StatsRouter from './routes/statsRoutes.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import {
  authenticateUser,
  authorizePermissions,
} from './middleware/authMiddleware.js';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './public')));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/v1', AuthRouter);
app.use('/api/v1', authenticateUser, UserRouter);
app.use('/api/v1', authenticateUser, ProjectRouter);
app.use('/api/v1', authenticateUser, TaskRouter);
app.use('/api/v1', authenticateUser, TicketRouter);
app.use('/api/v1', authenticateUser, CommentTaskRouter);
app.use('/api/v1', authenticateUser, CommentTicketRouter);
app.use('/api/v1', authenticateUser, MessageRouter);
app.use('/api/v1', authenticateUser, StatsRouter);
app.use(
  '/api/v1',
  authenticateUser,
  authorizePermissions('admin'),
  AdminRouter
);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Route Not Found' });
});

app.use(errorMiddleware);

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Connected to DB');
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
