import { customFetch, type ProjectForComment } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { GlobalLoader, ErrorElement } from '@/components';
import { ProjectCartComments, TaskCartComments } from '@/components';
import { useState } from 'react';

const CommentsPage = () => {
  const [singleProjectId, setSingleProjectId] = useState('');
  // console.log(singleProjectId);

  const { data, isPending, isError } = useQuery({
    queryKey: ['task-comments'],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-task-comments');
      return data;
    },
  });

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { projectsWithTasksAndComments } = data;

  // console.log(projectsWithTasksAndComments);

  let selectedProject;

  if (singleProjectId) {
    selectedProject = projectsWithTasksAndComments.find(
      (project: ProjectForComment) => {
        return project._id === singleProjectId;
      }
    );
  } else {
    selectedProject = projectsWithTasksAndComments[0];
  }
  console.log(selectedProject);

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      {projectsWithTasksAndComments.length < 1 ? (
        <h3 className="text-xl text-center">There is no created project yet</h3>
      ) : (
        <div className="w-full">
          {/* Projects */}
          <div className="w-full grid place-items-center gap-2">
            {projectsWithTasksAndComments.map((project: ProjectForComment) => {
              const { _id, projectName, status } = project;
              return (
                <ProjectCartComments
                  key={_id}
                  _id={_id}
                  projectName={projectName}
                  status={status}
                  setSingleProjectId={setSingleProjectId}
                />
              );
            })}
          </div>
          {/* Tasks */}
          <div className="w-full">
            <TaskCartComments selectedProject={selectedProject} />
          </div>
        </div>
      )}
    </section>
  );
};
export default CommentsPage;
