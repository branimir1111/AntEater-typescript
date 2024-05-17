import { TaskResponse } from '@/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';
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

type SingleTaskCartProps = {
  task: TaskResponse;
};

const SingleTaskCart = ({ task }: SingleTaskCartProps) => {
  const {
    title,
    status,
    taskType,
    priority,
    assignedTo,
    description,
    createdAt,
    projectId,
  } = task;

  let bgColor = '';
  let borderColor = '';
  let textColor = '';
  switch (status) {
    case 'new':
      bgColor = 'bg-indigo-500';
      borderColor = 'border-indigo-500';
      textColor = 'text-indigo-500';
      break;
    case 'in progress':
      bgColor = 'bg-[#1CD4D4]';
      borderColor = 'border-[#1CD4D4]';
      textColor = 'text-[#1CD4D4]';
      break;
    case 'under review':
      bgColor = 'bg-[#F0B429]';
      borderColor = 'border-[#F0B429]';
      textColor = 'text-[#F0B429]';
      break;
    case 'refactor':
      bgColor = 'bg-[#EF4E4E]';
      borderColor = 'border-[#EF4E4E]';
      textColor = 'text-[#EF4E4E]';
      break;
    case 'completed':
      bgColor = 'bg-[#51CA58]';
      borderColor = 'border-[#51CA58]';
      textColor = 'text-[#51CA58]';
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
  }

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
    <article
      className={`w-full bg-background-first rounded-sm border-b ${borderColor}`}
    >
      <header
        className={`w-full text-gray-900 rounded-t-sm capitalize pl-4 ${bgColor} bg-opacity-70`}
      >
        {title}
      </header>
      <div className="w-full pl-2 flex gap-2 py-4">
        <Badge
          className={`rounded-sm ${badgeBg} hover:${badgeBg} ${badgeText}`}
        >
          {priority}
        </Badge>
        <Badge variant="outline" className="rounded-sm border">
          {taskType}
        </Badge>
      </div>
      <footer className="w-full flex items-center justify-between p-2">
        <Avatar className="w-6 h-6">
          <AvatarImage
            src={assignedTo?.avatar}
            alt="ant"
            className="object-cover"
          />
          <AvatarFallback>
            <CircleUserRound />
          </AvatarFallback>
        </Avatar>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Details</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-background-first">
            <AlertDialogHeader>
              <AlertDialogTitle className={`capitalize ${textColor}`}>
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
              <p className="text-gray-400 text-sm mt-3">Task type:</p>
              <p className="font-semibold text-foreground">{taskType}</p>
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
      </footer>
    </article>
  );
};
export default SingleTaskCart;
