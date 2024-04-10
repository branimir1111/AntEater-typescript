import { useLoaderData } from 'react-router-dom';
import { type AllProjectsAndUsersResponse, customFetch } from '@/utils';
import { ProjectCart } from '@/components';
import { useQuery } from '@tanstack/react-query';

const allProjectsQuery = () => {
  return {
    queryKey: ['projects'],
    queryFn: () => customFetch.get('/all-projects'),
  };
};

const AllProjectsContainer = () => {
  const data = useQuery(allProjectsQuery());

  const { projectList } = useLoaderData() as AllProjectsAndUsersResponse;

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
