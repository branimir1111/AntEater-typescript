export type User = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
  avatarPublicId?: string;
};

export type ProjectUser = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  email?: string;
  role?: string;
};

export type ProjectResponse = {
  readonly _id: string;
  createdAt: string;
  createdBy: ProjectUser;
  description: string;
  projectManager: ProjectUser;
  projectName: string;
  status: string;
  teamMembers: ProjectUser[];
  updatedAt?: string;
};

export type AllUsersResponse = {
  currentDevs: User[];
  pms: User[];
};

export type StatusResponse = {
  statusActive: number;
  statusInactive: number;
  statusCompleted: number;
  statusTesting: number;
  statusPending: number;
  statusCanceled: number;
  statusDelayed: number;
};

export type AllProjectsResponse = {
  numOfAllProjects: number;
  numOfFilteredProjects: number;
  numOfPages: number;
  currentPage: number;
  allProjects: ProjectResponse[];
  statusData: StatusResponse;
};

export type AllProjectsAndUsersResponse = {
  currentDevs: User[];
  pms: User[];
  numOfAllProjects: number;
  currentPage: number;
  numOfPages: number;
  projectList: ProjectResponse[];
};

export type SearchParams = {
  search?: string;
  status?: string;
  sort?: string;
  limit?: string;
  currentPage?: string;
};

export type AllProjectsResponseWithParams = AllProjectsResponse & {
  params: SearchParams;
};

export type ParamsData = {
  [k: string]: SearchParams | string;
};

export type MainLink = {
  id: number;
  text: string;
  path: string;
  icon: React.ReactNode;
};

export type Theme = 'dark' | 'light' | 'system';

export type TaskResponse = {
  readonly _id: string;
  title: string;
  description: string;
  assignedTo: ProjectUser;
  projectId: ProjectResponse;
  taskType: string;
  priority: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
};

export type TicketResponse = {
  readonly _id: string;
  title: string;
  description: string;
  assignedTo: ProjectUser;
  projectId: ProjectResponse;
  ticketType: string;
  priority: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
};

export type CommentForTask = {
  readonly _id: string;
  text: string;
  createdAt: string;
  createdBy: string;
  user: ProjectUser;
};

export type TaskForComment = {
  readonly _id: string;
  title: string;
  projectId: string;
  taskType: string;
  status: string;
  priority: string;
  comments: CommentForTask[];
};

export type ProjectForComment = {
  readonly _id: string;
  projectName: string;
  status: string;
  tasks: TaskForComment[];
};

export type TicketForComment = {
  readonly _id: string;
  title: string;
  projectId: string;
  ticketType: string;
  status: string;
  priority: string;
  comments: CommentForTask[];
};

export type ProjectForTicketComment = {
  readonly _id: string;
  projectName: string;
  status: string;
  tickets: TicketForComment[];
};
export type SenderDetailsMessage = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
};
export type ReceiverDetailsMessage = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
};
export type ReceiveMessages = {
  readonly _id: string;
  senderId: string;
  receiverId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  senderDetails: SenderDetailsMessage;
  receiverDetails: ReceiverDetailsMessage;
};
export type UserMessagesProps = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
  messages: ReceiveMessages[];
};

export type CreatorDetailsProps = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  role: string;
  avatar?: string;
};

export type TaskDetailsProps = {
  readonly _id: string;
  title: string;
  taskType: string;
  status: string;
  priority: string;
};
export type TicketDetailsProps = {
  readonly _id: string;
  title: string;
  ticketType: string;
  status: string;
  priority: string;
};

export type ProjectDetailsProps = {
  readonly _id: string;
  projectName: string;
  status: string;
};

export type AdminTaskCommentsProps = {
  readonly _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  creatorDetails: CreatorDetailsProps;
  taskDetails: TaskDetailsProps;
  projectDetails: ProjectDetailsProps;
};
export type AdminTicketCommentsProps = {
  readonly _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  creatorDetails: CreatorDetailsProps;
  ticketDetails: TicketDetailsProps;
  projectDetails: ProjectDetailsProps;
};
export type AdminMessagesProps = {
  readonly _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  senderDetails: CreatorDetailsProps;
  receiverDetails: CreatorDetailsProps;
};
export type AdminUser = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  avatar?: string;
};
