import { Plus } from 'lucide-react';
import { type ProjectResponse, type ProjectUser } from '@/utils';
import {
  Table,
  TableHeader,
  TableCaption,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link, useLoaderData } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { EditAdminProject, DeletePMProject } from '@/components';

type AdminProjectsContainerProps = {
  allAdminProjects: ProjectResponse[];
};
type allAdminProjectsQueryParams = {
  search: string;
  status: string;
  sort: string;
  limit: string;
  page: string | number;
};
type SearchParamsType = {
  searchParams: allAdminProjectsQueryParams;
  currentDevs: ProjectUser[];
};
const AdminProjectsContainer = ({
  allAdminProjects,
}: AdminProjectsContainerProps) => {
  const { currentDevs } = useLoaderData() as SearchParamsType;
  return (
    <div className="w-full mt-4">
      <Button
        variant="secondary"
        className="bg-btn-primary hover:bg-btn-primary-hover text-white mb-4"
        asChild
      >
        <Link to="/dashboard/projects/create">
          <Plus className="w-5 mr-2" />
          Add New Project
        </Link>
      </Button>
      <Separator className="bg-[#0FB5BA]" />
      <Table>
        <TableCaption>A list of All Projects</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#0FB5BA] font-bold">
              Project Name
            </TableHead>
            <TableHead className="max-break5:hidden text-[#0FB5BA] font-bold">
              Project Manager
            </TableHead>
            <TableHead className="max-break8:hidden text-[#0FB5BA] font-bold">
              Developers
            </TableHead>
            <TableHead className="max-break14:hidden text-[#0FB5BA] font-bold">
              Status
            </TableHead>
            <TableHead className="text-[#0FB5BA] font-bold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAdminProjects.map((project) => {
            const { _id, projectName, projectManager, teamMembers, status } =
              project;

            let badgeBg = '';
            let badgeTxt = '';

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
                <TableCell className="max-break5:hidden">
                  {projectManager.firstName + ' ' + projectManager.lastName}
                </TableCell>
                <TableCell className="max-break8:hidden">
                  {teamMembers.map((member) => {
                    const { _id, firstName, lastName } = member;
                    return <p key={_id}>{firstName + ' ' + lastName}</p>;
                  })}
                </TableCell>
                <TableCell className="max-break14:hidden">
                  <Badge variant="outline" className={`${badgeBg} ${badgeTxt}`}>
                    {status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <EditAdminProject
                      project={project}
                      currentDevs={currentDevs}
                    />
                    <DeletePMProject id={_id} />
                  </div>
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
export default AdminProjectsContainer;
