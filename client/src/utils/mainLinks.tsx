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
  MessageSquareText,
} from 'lucide-react';
import { type MainLink } from '.';

export const mainLinksDeveloper: MainLink[] = [
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
    text: 'My projects',
    path: 'my-projects',
    icon: <Minus className="pl-3" />,
  },
  {
    id: 4,
    text: 'Tasks and activities',
    path: 'tasks',
    icon: <ListChecks />,
  },
  {
    id: 5,
    text: 'My tasks',
    path: 'my-tasks',
    icon: <Minus className="pl-3" />,
  },
  {
    id: 6,
    text: 'Tickets',
    path: 'tickets',
    icon: <TicketCheck />,
  },
  {
    id: 7,
    text: 'My tickets',
    path: 'my-tickets',
    icon: <Minus className="pl-3" />,
  },
  {
    id: 8,
    text: 'My comments',
    path: 'my-comments',
    icon: <MessageSquareText />,
  },
  {
    id: 9,
    text: 'Bugs categorization',
    path: 'bugs',
    icon: <Bug />,
  },
  //! DELETE this link when you finished!!!
  {
    id: 10,
    text: 'Colors Palette',
    path: 'colors',
    icon: <Palette />,
  },
];

export const mainLinksPM: MainLink[] = [
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
    text: 'Bugs categorization',
    path: 'bugs',
    icon: <Bug />,
  },
  {
    id: 6,
    text: 'PM panel',
    path: 'manager',
    icon: <UserRoundCog />,
  },
  {
    id: 7,
    text: 'Assign task',
    path: 'manager-assign-task',
    icon: <Minus className="pl-3" />,
  },
  {
    id: 8,
    text: 'Assign ticket',
    path: 'manager-assign-ticket',
    icon: <Minus className="pl-3" />,
  },
  //! DELETE this link when you finished!!!
  {
    id: 9,
    text: 'Colors Palette',
    path: 'colors',
    icon: <Palette />,
  },
];

export const mainLinksAdmin: MainLink[] = [
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
    text: 'Bugs categorization',
    path: 'bugs',
    icon: <Bug />,
  },
  {
    id: 6,
    text: 'Admin panel',
    path: 'admin',
    icon: <Shield />,
  },
  {
    id: 7,
    text: 'Manage roles',
    path: 'admin-manage-roles',
    icon: <Minus className="pl-3" />,
  },
  {
    id: 8,
    text: 'Assign task',
    path: 'admin-assign-task',
    icon: <Minus className="pl-3" />,
  },
  {
    id: 9,
    text: 'Assign ticket',
    path: 'admin-assign-ticket',
    icon: <Minus className="pl-3" />,
  },
  {
    id: 10,
    text: 'Member profiles',
    path: 'admin-member-profiles',
    icon: <Minus className="pl-3" />,
  },
  //! DELETE this link when you finished!!!
  {
    id: 11,
    text: 'Colors Palette',
    path: 'colors',
    icon: <Palette />,
  },
];
