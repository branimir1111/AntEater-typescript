import { type ProjectUser, customFetch } from '@/utils';
import {
  Table,
  TableHeader,
  TableCaption,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import PMAddNewTask from './PMAddNewTask';
import {
  DeletePMTask,
  EditPMTask,
  GlobalLoader,
  ErrorElement,
} from '@/components';
import { useQuery } from '@tanstack/react-query';

type ProjectResponse = {
  _id: string;
  projectName: string;
};

export type TaskResponse = {
  readonly _id: string;
  title: string;
  description: string;
  assignedTo: ProjectUser;
  project: ProjectResponse;
  taskType: string;
  priority: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
};

type PMTasksContainerProps = {
  allPMTasks: TaskResponse[];
};

const allProjectsQuery = () => {
  return {
    queryKey: ['all-pm-projects-list'],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-projects-pm-list');
      return data;
    },
  };
};

const PMTasksContainer = ({ allPMTasks }: PMTasksContainerProps) => {
  const { data, isPending, isError } = useQuery(allProjectsQuery());
  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { allPMProjects } = data;

  return (
    <div className="w-full">
      <PMAddNewTask allPMProjects={allPMProjects} />
      <Separator className="bg-[#0FB5BA] mt-8" />
      <Table>
        <TableCaption>A list of PM Tasks</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#0FB5BA] font-bold">Title</TableHead>
            <TableHead className="max-break5:hidden text-[#0FB5BA] font-bold">
              Project Name
            </TableHead>
            <TableHead className="max-break8:hidden text-[#0FB5BA] font-bold">
              Type
            </TableHead>
            <TableHead className="max-break14:hidden text-[#0FB5BA] font-bold">
              Status
            </TableHead>
            <TableHead className="text-[#0FB5BA] font-bold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allPMTasks.map((task) => {
            const { _id, title, project, taskType, status } = task;
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
              <TableRow key={_id}>
                <TableCell>{title}</TableCell>
                <TableCell className="max-break5:hidden">
                  {project.projectName}
                </TableCell>
                <TableCell className="max-break8:hidden">{taskType}</TableCell>
                <TableCell className="max-break14:hidden">
                  <Badge
                    variant="outline"
                    className={`${bgColor} bg-opacity-10 ${textColor}`}
                  >
                    {status}
                  </Badge>
                </TableCell>
                <TableCell className="flex items-center gap-3">
                  <EditPMTask allPMProjects={allPMProjects} task={task} />
                  <DeletePMTask id={_id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Separator className="bg-[#0FB5BA] mt-2" />
    </div>
  );
};
export default PMTasksContainer;
