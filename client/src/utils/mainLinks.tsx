import {
  ScatterChart,
  SquareKanban,
  ListChecks,
  Bug,
  TicketCheck,
  UserRoundCog,
  Shield,
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
    path: 'allprojects',
    icon: <SquareKanban />,
  },
  {
    id: 3,
    text: 'Tasks and activites',
    path: 'alltasks',
    icon: <ListChecks />,
  },
  {
    id: 4,
    text: 'Tickets',
    path: 'alltickets',
    icon: <TicketCheck />,
  },
  {
    id: 5,
    text: 'Bug categorization',
    path: 'bug-cat',
    icon: <Bug />,
  },
  {
    id: 6,
    text: 'PM Panel',
    path: 'project-manager',
    icon: <UserRoundCog />,
  },
  {
    id: 7,
    text: 'Admin Panel',
    path: 'admin',
    icon: <Shield />,
  },
];
