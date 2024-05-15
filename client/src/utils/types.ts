export type User = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
  avatarPublicId?: string;
};

//TODO basic type setup - need refactoring
export type ProjectTasks = [];

//TODO basic type setup - need refactoring
export type projectTickets = [];

//TODO basic type setup - need refactoring
export type projectComments = [];

export type ProjectUser = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
};

export type ProjectResponse = {
  readonly _id: string;
  createdAt: string;
  createdBy: ProjectUser;
  description: string;
  projectTickets?: projectTickets;
  projectManager: ProjectUser;
  projectName: string;
  projectTasks?: ProjectTasks;
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
  tickets: projectTickets;
  comments: projectComments;
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
