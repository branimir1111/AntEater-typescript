import { type ProjectResponse } from '@/utils';
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

type DevProjectsProps = {
  allProjects: ProjectResponse[];
};

const DevProjects = ({ allProjects }: DevProjectsProps) => {
  return (
    <div className="mt-8">
      <Table>
        <TableCaption>A list of your projects</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Project name</TableHead>
            <TableHead>Project manager</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tasks</TableHead>
            <TableHead>Tickets</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allProjects.map((project) => {
            const {
              _id,
              projectName,
              projectManager,
              status,
              projectTasks,
              projectBugs,
            } = project;

            let badgeBg = 'bg-primary';
            let badgeTxt = 'text-primary-content';

            switch (status) {
              case 'active':
                badgeBg = 'bg-blue-200';
                badgeTxt = 'text-blue-800';
                break;
              case 'inactive':
                badgeBg = 'badge-ghost';
                badgeTxt = '';
                break;
              case 'completed':
                badgeBg = 'bg-emerald-200';
                badgeTxt = 'text-emerald-800';
                break;
              case 'testing':
                badgeBg = 'bg-purple-200';
                badgeTxt = 'text-purple-800';
                break;
              case 'pending':
                badgeBg = 'bg-yellow-100';
                badgeTxt = 'text-yellow-700';
                break;
              case 'canceled':
                badgeBg = 'bg-rose-100';
                badgeTxt = 'text-rose-700';
                break;
              case 'delayed':
                badgeBg = 'bg-cyan-100';
                badgeTxt = 'text-cyan-500';
                break;
            }

            return (
              <TableRow key={_id}>
                <TableCell>{projectName}</TableCell>
                <TableCell>
                  {projectManager.firstName + ' ' + projectManager.lastName}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`${badgeBg} ${badgeTxt}`}>
                    {status}
                  </Badge>
                </TableCell>
                <TableCell>{projectTasks?.length}</TableCell>
                <TableCell>{projectBugs?.length}</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default DevProjects;
