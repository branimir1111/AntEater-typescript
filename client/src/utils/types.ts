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

export type AllProjectsResponse = {
  countAllProjects: number;
  currentPage: number;
  numOfPages: number;
  allProjects: ProjectResponse[];
};

export type AllProjectsAndUsersResponse = {
  currentDevs: User[];
  pms: User[];
  countAllProjects: number;
  currentPage: number;
  numOfPages: number;
  projectList: ProjectResponse[];
};

export type MainLink = {
  id: number;
  text: string;
  path: string;
  icon: React.ReactNode;
};

export type Theme = 'dark' | 'light' | 'system';
