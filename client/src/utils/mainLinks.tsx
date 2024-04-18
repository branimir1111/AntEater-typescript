import {
  ScatterChart,
  SquareKanban,
  ListChecks,
  Bug,
  TicketCheck,
  UserRoundCog,
  Shield,
  Palette,
  Minus,
} from 'lucide-react';
import { type MainLink } from '.';

export const mainLinks: MainLink[] = [
  {
    id: 1,
    text: 'Statistics',
    path: '.',
    icon: <ScatterChart />,
  },
  {
    id: 2,
    text: 'Projects',
    path: 'projects',
    icon: <SquareKanban />,
  },
  {
    id: 3,
    text: 'My Projects',
    path: 'my-projects',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 4,
    text: 'Tasks and activities',
    path: 'tasks',
    icon: <ListChecks />,
  },
  {
    id: 5,
    text: 'My Tasks',
    path: 'my-tasks',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 6,
    text: 'Tickets',
    path: 'tickets',
    icon: <TicketCheck />,
  },
  {
    id: 7,
    text: 'My Tickets',
    path: 'my-tickets',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 8,
    text: 'Add Tickets',
    path: 'add-tickets',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 9,
    text: 'Bug categorization',
    path: 'bugs',
    icon: <Bug />,
  },
  {
    id: 10,
    text: 'PM Panel',
    path: 'manager',
    icon: <UserRoundCog />,
  },
  {
    id: 11,
    text: 'Assign Task',
    path: 'manager-assign-task',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 12,
    text: 'Assign Ticket',
    path: 'manager-assign-ticket',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 13,
    text: 'Admin Panel',
    path: 'admin',
    icon: <Shield />,
  },
  {
    id: 14,
    text: 'Manage Roles',
    path: 'admin-manage-roles',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 15,
    text: 'Assign Task',
    path: 'admin-assign-task',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 16,
    text: 'Assign Ticket',
    path: 'admin-assign-ticket',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 17,
    text: 'Member Profiles',
    path: 'admin-member-profiles',
    icon: <Minus className="pl-2" />,
  },
  {
    id: 18,
    text: 'Colors Palette',
    path: 'colors',
    icon: <Palette />,
  },
];
