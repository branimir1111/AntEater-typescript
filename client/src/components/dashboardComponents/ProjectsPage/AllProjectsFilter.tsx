import { useLoaderData } from 'react-router-dom';
import { type AllProjectsAndUsersResponse } from '@/utils';

const AllProjectsFilter = () => {
  const { countAllProjects } = useLoaderData() as AllProjectsAndUsersResponse;
  return (
    <div className="w-full bg-teal-400">
      <h1>{countAllProjects} projects found</h1>AllProjectsFilter
    </div>
  );
};
export default AllProjectsFilter;
