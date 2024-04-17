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
    icon: <Minus />,
  },
  {
    id: 4,
    text: 'Tasks and activities',
    path: 'tasks',
    icon: <ListChecks />,
  },
  {
    id: 5,
    text: 'Tickets',
    path: 'tickets',
    icon: <TicketCheck />,
  },
  {
    id: 6,
    text: 'Bug categorization',
    path: 'bugs',
    icon: <Bug />,
  },
  {
    id: 7,
    text: 'PM Panel',
    path: 'manager',
    icon: <UserRoundCog />,
  },
  {
    id: 8,
    text: 'Admin Panel',
    path: 'admin',
    icon: <Shield />,
  },
  {
    id: 9,
    text: 'Colors Pallete',
    path: 'colors',
    icon: <Palette />,
  },
];
