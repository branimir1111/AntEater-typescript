import { type ProjectResponse } from '@/utils';
import { ProjectCart } from '@/components';

const AllProjectsContainer = ({
  allProjects,
}: {
  allProjects: ProjectResponse[];
}) => {
  return (
    <div className="w-full grid place-items-center gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {allProjects.map((project) => {
        const {
          _id,
          projectName,
          description,
          projectManager,
          teamMembers,
          status,
          createdBy,
          createdAt,
        } = project;
        return (
          <ProjectCart
            key={_id}
            _id={_id}
            projectName={projectName}
            description={description}
            projectManager={projectManager}
            teamMembers={teamMembers}
            status={status}
            createdBy={createdBy}
            createdAt={createdAt}
          />
        );
      })}
    </div>
  );
};
export default AllProjectsContainer;
