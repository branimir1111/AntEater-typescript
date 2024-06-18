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
import PMAddNewTicket from './PMAddNewTicket';
import {
  DeletePMTicket,
  EditPMTicket,
  GlobalLoader,
  ErrorElement,
} from '@/components';
import { useQuery } from '@tanstack/react-query';

type ProjectResponse = {
  _id: string;
  projectName: string;
};

export type TicketResponse = {
  readonly _id: string;
  title: string;
  description: string;
  assignedTo: ProjectUser;
  project: ProjectResponse;
  ticketType: string;
  priority: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
};

type PMTicketsContainerProps = {
  allPMTickets: TicketResponse[];
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

const PMTicketsContainer = ({ allPMTickets }: PMTicketsContainerProps) => {
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
      <PMAddNewTicket allPMProjects={allPMProjects} />
      <Separator className="bg-[#0FB5BA] mt-8" />
      <Table>
        <TableCaption>A list of PM Tickets</TableCaption>
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
          {allPMTickets.map((ticket) => {
            const { _id, title, project, ticketType, status } = ticket;

            let secondTextColor = '';
            switch (ticketType) {
              case 'feature':
                secondTextColor = 'text-indigo-700';
                break;
              case 'improvement':
                secondTextColor = 'text-[#099AA4]';
                break;
              case 'security':
                secondTextColor = 'text-[#DE911D]';
                break;
              case 'bug':
                secondTextColor = 'text-[#AB091E]';
                break;
            }
            return (
              <TableRow key={_id}>
                <TableCell>{title}</TableCell>
                <TableCell className="max-break5:hidden">
                  {project.projectName}
                </TableCell>
                <TableCell className={`max-break8:hidden ${secondTextColor}`}>
                  {ticketType}
                </TableCell>
                <TableCell className="max-break14:hidden">
                  <Badge variant="outline">{status}</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-3">
                  <EditPMTicket allPMProjects={allPMProjects} ticket={ticket} />
                  <DeletePMTicket id={_id} />
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
export default PMTicketsContainer;
