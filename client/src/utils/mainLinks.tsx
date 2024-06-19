import {
  ScatterChart,
  SquareKanban,
  ListChecks,
  MessageCircleMore,
  TicketCheck,
  UserRoundCog,
  Shield,
  Palette,
  Minus,
  MessageSquareText,
  BookOpenCheck,
  Sticker,
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
    text: 'Comments',
    path: 'comments',
    icon: <MessageSquareText />,
  },
  {
    id: 9,
    text: 'Messages',
    path: 'messages',
    icon: <MessageCircleMore />,
  },
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
    text: 'Comments',
    path: 'comments',
    icon: <MessageSquareText />,
  },
  {
    id: 6,
    text: 'Messages',
    path: 'messages',
    icon: <MessageCircleMore />,
  },
  {
    id: 7,
    text: 'PM projects',
    path: 'manager',
    icon: <UserRoundCog />,
  },
  {
    id: 8,
    text: 'PM tasks',
    path: 'manager-task',
    icon: <BookOpenCheck />,
  },
  {
    id: 9,
    text: 'PM tickets',
    path: 'manager-ticket',
    icon: <Sticker />,
  },
  {
    id: 10,
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
    text: 'Messages',
    path: 'messages',
    icon: <MessageCircleMore />,
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
  {
    id: 11,
    text: 'Colors Palette',
    path: 'colors',
    icon: <Palette />,
  },
];
