import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import day from 'dayjs';
import { Button } from '@/components/ui/button';
import { type TicketResponse } from '@/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CircleUserRound } from 'lucide-react';

type TicketDetailsProps = {
  ticket: TicketResponse;
  secondTextColor: string;
  badgeBg: string;
  badgeText: string;
  bgColor: string;
};

const TicketDetails = ({
  ticket,
  secondTextColor,
  badgeBg,
  badgeText,
  bgColor,
}: TicketDetailsProps) => {
  const {
    title,
    description,
    assignedTo,
    createdAt,
    ticketType,
    priority,
    projectId,
  } = ticket;

  let badgeSecondBg = '';
  let badgeSecondTxt = '';
  switch (projectId.status) {
    case 'active':
      badgeSecondBg = 'bg-blue-200';
      badgeSecondTxt = 'text-blue-800';
      break;
    case 'inactive':
      badgeSecondBg = 'badge-ghost';
      badgeSecondTxt = '';
      break;
    case 'completed':
      badgeSecondBg = 'bg-emerald-200';
      badgeSecondTxt = 'text-emerald-800';
      break;
    case 'testing':
      badgeSecondBg = 'bg-purple-200';
      badgeSecondTxt = 'text-purple-800';
      break;
    case 'pending':
      badgeSecondBg = 'bg-yellow-100';
      badgeSecondTxt = 'text-yellow-700';
      break;
    case 'canceled':
      badgeSecondBg = 'bg-rose-100';
      badgeSecondTxt = 'text-rose-700';
      break;
    case 'delayed':
      badgeSecondBg = 'bg-cyan-100';
      badgeSecondTxt = 'text-cyan-500';
      break;
  }

  const date = day(createdAt).format('D MMM YYYY');
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link" className={`${secondTextColor}`}>
          Details
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={`capitalize ${secondTextColor}`}>
            {title}
          </AlertDialogTitle>
          <hr className="w-full" />
        </AlertDialogHeader>
        <div>
          <p className="text-gray-400 text-sm">Description:</p>
          <p className="font-semibold text-foreground">{description}</p>
          <p className="text-gray-400 text-sm mt-3">Assigned to:</p>
          <div className="w-full flex items-end gap-2">
            <Avatar className="w-8 h-8 mt-2">
              <AvatarImage
                src={assignedTo?.avatar}
                alt="ant"
                className="object-cover"
              />
              <AvatarFallback>
                <CircleUserRound />
              </AvatarFallback>
            </Avatar>
            <p className=" font-semibold text-foreground">
              {assignedTo.firstName}
            </p>
          </div>
          <p className="text-gray-400 text-sm mt-3">Ticket type:</p>
          <p className={`font-semibold ${secondTextColor}`}>{ticketType}</p>
          <p className="text-gray-400 text-sm mt-3">Priority:</p>
          <Badge
            className={`rounded-sm ${badgeBg} hover:${badgeBg} ${badgeText} mt-1 max-w-max`}
          >
            {priority}
          </Badge>
          <p className="text-gray-400 text-sm mt-3">Created at:</p>
          <p className=" font-semibold text-foreground">{date}</p>
          <p className="text-gray-400 text-sm mt-3">Project name:</p>
          <p className=" font-semibold text-foreground">
            {projectId.projectName}
          </p>
          <p className="text-gray-400 text-sm mt-3">Project status:</p>
          <Badge
            className={`rounded-sm ${badgeSecondBg} hover:${badgeSecondBg} ${badgeSecondTxt} mt-1 max-w-max`}
          >
            {projectId.status}
          </Badge>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction
            className={`${bgColor} hover:${bgColor} hover:bg-opacity-90`}
          >
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default TicketDetails;
