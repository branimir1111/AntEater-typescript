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
export type ProjectBugs = [];

//TODO basic type setup - need refactoring
export type ProjectTasks = [];

export type ProjectUser = {
  _id: string;
  firstName: string;
  lastName: string;
};

export type ProjectResponse = {
  _id: string;
  createdAt: string;
  createdBy: ProjectUser;
  description: string;
  projectBugs?: ProjectBugs;
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
