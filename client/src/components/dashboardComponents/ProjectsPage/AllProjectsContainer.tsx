import { type AllProjectsResponseWithParams } from '@/utils';
import { ProjectCart } from '@/components';
import planList from '@/images/planList.svg';
import { useLoaderData } from 'react-router-dom';

const AllProjectsContainer = () => {
  const { ...response } = useLoaderData() as AllProjectsResponseWithParams;
  const { allProjects } = response;
  return (
    <>
      {allProjects.length > 0 ? (
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
      ) : (
        <div className="w-full grid place-items-center pt-8">
          <h1 className="text-lg sm:text-xl text-center">
            There are no projects matching your search, please try something
            else.
          </h1>
          <img src={planList} alt="planList" className="w-80" />
        </div>
      )}
    </>
  );
};
export default AllProjectsContainer;
