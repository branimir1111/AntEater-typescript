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
    <div className="w-full">
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
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTasks.map((filteredTask) => {
            const { _id, title, projectId } = filteredTask;
            return (
              <TableRow key={_id}>
                <TableCell>{title}</TableCell>
                <TableCell>{projectId.projectName}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default DevTasksTable;
