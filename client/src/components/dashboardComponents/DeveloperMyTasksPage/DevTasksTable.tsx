import {
  type TaskResponse,
  useAppSelector,
  type ProjectResponse,
} from '@/utils';
import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import AddNewDevTask from './AddNewDevTask';
import EditDevTask from './EditDevTask';
import AddDevComment from './AddDevComment';

type TaskStatusPillarProps = {
  status: string;
  filteredTasks: TaskResponse[];
  projectsList: ProjectResponse[];
};

const DevTasksTable = ({
  status,
  filteredTasks,
  projectsList,
}: TaskStatusPillarProps) => {
  const user = useAppSelector((state) => state.userState.user);
  const assignedToUser = user?._id;

  const numOfTasks = filteredTasks.length;

  let textColor = '';
  let bgColor = '';
  let borderColor = '';

  switch (status) {
    case 'new':
      textColor = 'text-indigo-500';
      bgColor = 'bg-indigo-500';
      borderColor = 'border-indigo-500';
      break;
    case 'in progress':
      textColor = 'text-[#1CD4D4]';
      bgColor = 'bg-[#1CD4D4]';
      borderColor = 'border-[#1CD4D4]';
      break;
    case 'under review':
      textColor = 'text-[#F0B429]';
      bgColor = 'bg-[#F0B429]';
      borderColor = 'border-[#F0B429]';
      break;
    case 'refactor':
      textColor = 'text-[#EF4E4E]';
      bgColor = 'bg-[#EF4E4E]';
      borderColor = 'border-[#EF4E4E]';
      break;
    case 'completed':
      textColor = 'text-[#51CA58]';
      bgColor = 'bg-[#51CA58]';
      borderColor = 'border-[#51CA58]';
      break;
  }

  return (
    <div
      className={`w-full ${bgColor} bg-opacity-10 py-2 px-2 mt-2 rounded-md`}
    >
      {status === 'new' && (
        <AddNewDevTask
          assignedToUser={assignedToUser}
          projectsList={projectsList}
        />
      )}
      <h1 className={`${textColor} mt-4 uppercase text-md font-bold`}>
        {status} ({numOfTasks})
      </h1>
      <hr className={`w-full mt-2 mb-4 ${borderColor}`} />
      <Table>
        <TableCaption>
          A list of your{' '}
          <span className={`${textColor} font-bold`}>'{status}'</span> tasks
        </TableCaption>
        <TableHeader>
          <TableRow className="grid grid-cols-2 break6:grid-cols-5">
            <TableHead className={`${textColor}`}>Task</TableHead>
            <TableHead className={`hidden break6:block ${textColor}`}>
              Project name
            </TableHead>
            <TableHead className={`hidden break6:block ${textColor}`}>
              Type
            </TableHead>
            <TableHead className={`hidden break6:block ${textColor}`}>
              Priority
            </TableHead>
            <TableHead className={`${textColor}`}>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTasks.map((filteredTask) => {
            const { _id, title, projectId, taskType, priority } = filteredTask;

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

            return (
              <TableRow
                key={_id}
                className="grid grid-cols-2 break6:grid-cols-5 justify-center"
              >
                <TableCell>{title}</TableCell>
                <TableCell className="hidden break6:block">
                  {projectId.projectName}
                </TableCell>
                <TableCell className="hidden break6:block">
                  <Badge variant="outline">{taskType}</Badge>
                </TableCell>
                <TableCell className="hidden break6:block">
                  <Badge
                    className={`${badgeBg} ${badgeText} hover:${badgeBg} rounded-sm`}
                  >
                    {priority}
                  </Badge>
                </TableCell>
                <TableCell className="flex items-center gap-3">
                  <EditDevTask />
                  <AddDevComment />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default DevTasksTable;
