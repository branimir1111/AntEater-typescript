import { type TaskResponse } from '@/utils';
import SingleTaskCart from './SingleTaskCart';
import { twMerge } from 'tailwind-merge';

type TaskStatusPillar = {
  status: string;
  filteredTasks: TaskResponse[];
};

const TaskStatusPillar = ({ status, filteredTasks }: TaskStatusPillar) => {
  const numOfTasks = filteredTasks.length;

  let textColor = '';

  switch (status) {
    case 'new':
      textColor = 'text-indigo-500';
      break;
    case 'in progress':
      textColor = 'text-[#1CD4D4]';
      break;
    case 'under review':
      textColor = 'text-[#F0B429]';
      break;
    case 'refactor':
      textColor = 'text-[#EF4E4E]';
      break;
    case 'completed':
      textColor = 'text-[#51CA58]';
      break;
  }

  return (
    <div className="w-full rounded-md bg-background px-1 py-2">
      <div className="rounded-t-sm pb-4 pl-4">
        <h1 className={twMerge(`text-sm uppercase ${textColor}`)}>
          {status} ({numOfTasks})
        </h1>
      </div>
      <div className="w-full grid place-items-center gap-2">
        {filteredTasks.map((task) => {
          return <SingleTaskCart key={task._id} task={task} />;
        })}
      </div>
    </div>
  );
};
export default TaskStatusPillar;
