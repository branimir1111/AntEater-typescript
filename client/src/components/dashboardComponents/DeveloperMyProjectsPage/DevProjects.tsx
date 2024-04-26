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
            return (
              <TableRow key={_id}>
                <TableCell>{projectName}</TableCell>
                <TableCell>
                  {projectManager.firstName + ' ' + projectManager.lastName}
                </TableCell>
                <TableCell>{status}</TableCell>
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
