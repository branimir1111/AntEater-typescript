import {
  customFetch,
  type ProjectForComment,
  type TaskForComment,
} from '@/utils';
import { useQuery } from '@tanstack/react-query';
import {
  GlobalLoader,
  ErrorElement,
  ProjectCartComments,
  TaskCartComments,
  CommentCart,
} from '@/components';
import { useState } from 'react';

const CommentsTasksPage = () => {
  const [singleProjectId, setSingleProjectId] = useState('');
  const [singleTaskId, setSingleTaskId] = useState('');

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

  let selectedTask;
  const { tasks } = selectedProject;

  if (singleTaskId) {
    selectedTask = tasks.find((task: TaskForComment) => {
      return task._id === singleTaskId;
    });
  } else {
    selectedTask = tasks[0];
  }

  return (
    <section>
      {projectsWithTasksAndComments.length < 1 ? (
        <h3 className="text-xl text-center">There is no created project yet</h3>
      ) : (
        <div className="w-full grid break15:grid-cols-3 gap-2">
          {/* Projects */}
          <div className="w-full">
            {projectsWithTasksAndComments.map((project: ProjectForComment) => {
              const isActive = selectedProject._id === project._id;
              return (
                <div className="w-full" key={project._id}>
                  <ProjectCartComments
                    isActive={isActive}
                    project={project}
                    setSingleProjectId={setSingleProjectId}
                    setSingleTaskId={setSingleTaskId}
                  />
                  <div className="w-full break15:hidden">
                    {selectedProject._id === project._id ? (
                      <TaskCartComments
                        singleTaskId={singleTaskId}
                        selectedProject={selectedProject}
                        setSingleTaskId={setSingleTaskId}
                        selectedTask={selectedTask}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Tasks */}
          <div className="w-full max-break15:hidden">
            <TaskCartComments
              selectedProject={selectedProject}
              singleTaskId={singleTaskId}
              setSingleTaskId={setSingleTaskId}
              selectedTask={selectedTask}
            />
          </div>
          {/* Comments */}
          <div className="w-full max-break15:hidden">
            <CommentCart
              selectedTask={selectedTask}
              projectId={selectedProject._id}
            />
          </div>
        </div>
      )}
    </section>
  );
};
export default CommentsTasksPage;
