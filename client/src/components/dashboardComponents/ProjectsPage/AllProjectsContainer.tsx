import {
  type ProjectResponse,
  type AllProjectsAndUsersResponse,
} from '@/utils';
import { ProjectCart } from '@/components';
import { useOutletContext } from 'react-router-dom';
// import { customFetch } from '@/utils';
// import { useQuery } from '@tanstack/react-query';

const AllProjectsContainer = () => {
  const { projectList } = useOutletContext() as AllProjectsAndUsersResponse;
  // const { data, isPending, isError } = useQuery({
  //   queryKey: ['projects'],
  //   queryFn: async () => {
  //     const { data } = await customFetch.get('/all-projects');
  //     return data;
  //   },
  // });
  // if (isPending) {
  //   return <h1>Loading...</h1>;
  // }
  // if (isError) {
  //   return <h1>Error...</h1>;
  // }

  // const { allProjects } = data;

  return (
    <div className="w-full grid place-items-center gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {projectList.map((project: ProjectResponse) => {
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
