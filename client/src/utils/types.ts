export type User = {
  readonly _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
  avatarPublicId?: string;
};

export type AllUsersResponse = {
  currentDevs: User[];
  pms: User[];
};

export type MainLink = {
  id: number;
  text: string;
  path: string;
  icon: React.ReactNode;
};

export type Theme = 'dark' | 'light' | 'system';
