import { useLoaderData } from 'react-router-dom';
import { type AllProjectsAndUsersResponse } from '@/utils';
import { ProjectCart } from '@/components';
const AllProjectsContainer = () => {
  const { projectList } = useLoaderData() as AllProjectsAndUsersResponse;
  console.log(projectList);

  return (
    <div className="w-full grid place-items-center gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {projectList.map((project) => {
        const {
          _id,
          projectName,
          projectManager,
          createdBy,
          createdAt,
          status,
        } = project;
        return (
          <ProjectCart
            key={_id}
            _id={_id}
            projectName={projectName}
            projectManager={projectManager}
            createdBy={createdBy}
            createdAt={createdAt}
            status={status}
          />
        );
      })}
    </div>
  );
};
export default AllProjectsContainer;
