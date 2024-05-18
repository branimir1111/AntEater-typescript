import { type TicketResponse } from '@/utils';
import day from 'dayjs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type SingleTicketDetailsProps = {
  ticketDetails: TicketResponse;
};

const SingleTicketDetails = ({ ticketDetails }: SingleTicketDetailsProps) => {
  const {
    title,
    description,
    ticketType,
    priority,
    status,
    createdAt,
    assignedTo,
    projectId,
  } = ticketDetails;
  const date = day(createdAt).format('D MMM YYYY');

  let textColor = '';
  let bgColor = '';
  switch (ticketType) {
    case 'feature':
      textColor = 'text-indigo-50';
      bgColor = 'bg-indigo-700';
      break;
    case 'improvement':
      textColor = 'text-[#E1FCF8]';
      bgColor = 'bg-[#099AA4]';
      break;
    case 'security':
      textColor = 'text-[#FFFBEA]';
      bgColor = 'bg-[#DE911D]';
      break;
    case 'bug':
      textColor = 'text-[#FFE3E3]';
      bgColor = 'bg-[#AB091E]';
      break;
  }

  let badgeBg = '';
  let badgeText = '';
  switch (priority) {
    case 'low':
      badgeBg = 'bg-[#C1FEF6]';
      badgeText = 'text-[#07818F]';
      break;
    case 'medium':
      badgeBg = 'bg-[#FFF3C4]';
      badgeText = 'text-[#B44D12]';
      break;
    case 'high':
      badgeBg = 'bg-[#FFB8D2]';
      badgeText = 'text-[#870557]';
      break;
    case 'urgent':
      badgeBg = 'bg-[#A30664]';
      badgeText = 'text-[#FFE3EC]';
      break;
  }

  let badgeBgProject = '';
  let badgeTxtProject = '';
  switch (projectId.status) {
    case 'active':
      badgeBgProject = 'bg-blue-200';
      badgeTxtProject = 'text-blue-800';
      break;
    case 'inactive':
      badgeBgProject = 'badge-ghost';
      badgeTxtProject = '';
      break;
    case 'completed':
      badgeBgProject = 'bg-emerald-200';
      badgeTxtProject = 'text-emerald-800';
      break;
    case 'testing':
      badgeBgProject = 'bg-purple-200';
      badgeTxtProject = 'text-purple-800';
      break;
    case 'pending':
      badgeBgProject = 'bg-yellow-100';
      badgeTxtProject = 'text-yellow-700';
      break;
    case 'canceled':
      badgeBgProject = 'bg-rose-100';
      badgeTxtProject = 'text-rose-700';
      break;
    case 'delayed':
      badgeBgProject = 'bg-cyan-100';
      badgeTxtProject = 'text-cyan-500';
      break;
  }

  return (
    <div className="w-full mt-4 rounded-sm border border-[#099AA4] p-4 bg-[#099AA4] bg-opacity-10">
      <h1 className="capitalize text-2xl font-semibold border-b pb-2 text-[#51CA58]">
        {title}
      </h1>
      <div className="grid break15:grid-cols-2 gap-2 break15:gap-x-4 pt-2">
        <div className="w-full max-break15:border-b max-break15:pb-4 break15:border-r">
          <p className="text-muted-foreground font-bold">Description</p>
          <h1>{description}</h1>
          <p className="mt-2 text-muted-foreground font-bold">Type</p>
          <Badge
            className={`${bgColor} ${textColor} hover:${bgColor} rounded-md`}
          >
            {ticketType}
          </Badge>
          <p className="mt-2 text-muted-foreground font-bold">Priority</p>
          <Badge
            className={`${badgeBg} ${badgeText} hover:${badgeBg} rounded-md`}
          >
            {priority}
          </Badge>
          <p className="mt-2 text-muted-foreground font-bold">Status</p>
          <Badge variant="outline">{status}</Badge>
          <p className="mt-2 text-muted-foreground font-bold">Created at</p>
          <h1>{date}</h1>
        </div>
        <div className="w-full">
          <p className="text-muted-foreground font-bold">Assigned to</p>
          <Avatar className="w-20 h-20 mt-2">
            <AvatarImage
              src={assignedTo?.avatar}
              alt="ant"
              className="object-cover"
            />
            <AvatarFallback>
              <CircleUserRound />
            </AvatarFallback>
          </Avatar>
          {assignedTo.firstName}
          <p className="mt-2 text-muted-foreground font-bold">Project name</p>
          <h1>{projectId.projectName}</h1>
          <p className="mt-2 text-muted-foreground font-bold">Project status</p>
          <Badge
            className={`${badgeBgProject} ${badgeTxtProject} hover:${badgeBgProject} rounded-md`}
          >
            {projectId.status}
          </Badge>
        </div>
      </div>
    </div>
  );
};
export default SingleTicketDetails;
