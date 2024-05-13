import { type TaskResponse } from '@/utils';
import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';

type TaskStatusPillarProps = {
  status: string;
  filteredTasks: TaskResponse[];
};

const DevTasksTable = ({ status, filteredTasks }: TaskStatusPillarProps) => {
  const numOfTasks = filteredTasks.length;
  console.log(filteredTasks);

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
    <div
      className={`w-full ${bgColor} bg-opacity-10 py-1 px-2 mt-2 rounded-md`}
    >
      <h1 className={`${textColor} mt-6 uppercase text-md`}>
        {status} ({numOfTasks})
      </h1>
      <Table>
        <TableCaption>
          A list of your{' '}
          <span className={`${textColor} font-bold`}>'{status}'</span> tasks
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className={`${textColor}`}>Task</TableHead>
            <TableHead className={`${textColor}`}>Project name</TableHead>
            <TableHead className={`${textColor}`}>Type</TableHead>
            <TableHead className={`${textColor}`}>Priority</TableHead>
            <TableHead className={`${textColor}`}>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTasks.map((filteredTask) => {
            const { _id, title, projectId, taskType, priority } = filteredTask;
            return (
              <TableRow key={_id}>
                <TableCell>{title}</TableCell>
                <TableCell>{projectId.projectName}</TableCell>
                <TableCell>{taskType}</TableCell>
                <TableCell>{priority}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default DevTasksTable;
