import {
  ScatterChart,
  SquareKanban,
  ListChecks,
  Bug,
  TicketCheck,
  UserRoundCog,
  Shield,
  Palette,
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
    text: 'Tasks and activities',
    path: 'tasks',
    icon: <ListChecks />,
  },
  {
    id: 4,
    text: 'Tickets',
    path: 'tickets',
    icon: <TicketCheck />,
  },
  {
    id: 5,
    text: 'Bug categorization',
    path: 'bugs',
    icon: <Bug />,
  },
  {
    id: 6,
    text: 'PM Panel',
    path: 'manager',
    icon: <UserRoundCog />,
  },
  {
    id: 7,
    text: 'Admin Panel',
    path: 'admin',
    icon: <Shield />,
  },
  {
    id: 7,
    text: 'Colors Pallete',
    path: 'colors',
    icon: <Palette />,
  },
];
