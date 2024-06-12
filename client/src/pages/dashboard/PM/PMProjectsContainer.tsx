import { type ProjectResponse } from '@/utils';

type PMProjectsContainerProps = {
  allPMProjects: ProjectResponse[];
};

const PMProjectsContainer = ({ allPMProjects }: PMProjectsContainerProps) => {
  return (
    <div className="w-full">
      {allPMProjects.map((project) => {
        const { _id, projectName } = project;
        return <h1 key={_id}>{projectName}</h1>;
      })}
    </div>
  );
};
export default PMProjectsContainer;
