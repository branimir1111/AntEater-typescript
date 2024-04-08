import { useLoaderData } from 'react-router-dom';
import { type AllProjectsAndUsersResponse } from '@/utils';

const AllProjectsContainer = () => {
  const { projectList } = useLoaderData() as AllProjectsAndUsersResponse;
  console.log(projectList);

  return (
    <div className="w-full">
      {projectList.map((project) => {
        const { _id, projectName } = project;
        return <p key={_id}>{projectName}</p>;
      })}
    </div>
  );
};
export default AllProjectsContainer;
