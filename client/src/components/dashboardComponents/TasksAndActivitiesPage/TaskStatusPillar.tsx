import { type TaskResponse } from '@/utils';
import SingleTaskCart from './SingleTaskCart';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mouse } from 'lucide-react';

type TaskStatusPillarProps = {
  status: string;
  filteredTasks: TaskResponse[];
};

const TaskStatusPillar = ({ status, filteredTasks }: TaskStatusPillarProps) => {
  const numOfTasks = filteredTasks.length;

  let textColor = '';
  let bgColor = '';

  switch (status) {
    case 'new':
      textColor = 'text-indigo-500';
      bgColor = 'bg-indigo-500';
      break;
    case 'in progress':
      textColor = 'text-[#1CD4D4]';
      bgColor = 'bg-[#1CD4D4]';
      break;
    case 'under review':
      textColor = 'text-[#F0B429]';
      bgColor = 'bg-[#F0B429]';
      break;
    case 'refactor':
      textColor = 'text-[#EF4E4E]';
      bgColor = 'bg-[#EF4E4E]';
      break;
    case 'completed':
      textColor = 'text-[#51CA58]';
      bgColor = 'bg-[#51CA58]';
      break;
  }

  return (
    <div className="w-full rounded-md bg-background border">
      <div
        className={`rounded-t-sm flex justify-between py-2 px-4 ${bgColor} bg-opacity-15 border-b`}
      >
        <h1 className={`text-sm uppercase ${textColor}`}>
          {status} ({numOfTasks})
        </h1>
        {numOfTasks > 3 ? (
          <div className="flex gap-1">
            <Mouse className={`${textColor}`} />
            <p className={`${textColor}`}>scroll</p>
          </div>
        ) : null}
      </div>
      <ScrollArea className="w-full h-[440px] p-1">
        <div className="w-full grid place-items-center gap-3">
          {filteredTasks.map((task) => {
            return <SingleTaskCart key={task._id} task={task} />;
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
export default TaskStatusPillar;
