import { DevTasksFilter, DevTasksContainer } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { customFetch, type ProjectResponse } from '@/utils';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';

const allProjectsQuery = () => {
  const params = {
    search: '',
    status: 'all',
    sort: 'newest',
    limit: 'all',
    page: '1',
  };
  const { search, status, sort, limit, page } = params;
  return {
    queryKey: [
      'projectsForTasksDev',
      search ?? '',
      status ?? 'all',
      sort ?? 'newest',
      limit ?? 'all',
      page ?? '1',
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-projects-dev', { params });
      return data;
    },
  };
};

const allTasksDevQuery = (projectId: string) => {
  const params = {
    projectId: projectId,
  };
  return {
    queryKey: ['all-tasks-dev', projectId],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-tasks-dev', { params });
      return data;
    },
  };
};

const MyTasksPage = () => {
  const [value, setValue] = useState('');
  const [projectId, setProjectId] = useState('');

  const {
    data: projectsDev,
    isPending,
    isError,
  } = useQuery(allProjectsQuery());
  const {
    data: tasksResponse,
    isPending: isTasksPending,
    isError: isTasksError,
  } = useQuery(allTasksDevQuery(projectId));

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  const projectsList = projectsDev.allProjects;

  if (isTasksPending) {
    return <h1>Loading...</h1>;
  }
  if (isTasksError) {
    return <h1>Error...</h1>;
  }

  let projectName = '';
  if (projectId) {
    const foundedProject = projectsDev.allProjects.find(
      (project: ProjectResponse) => project._id === projectId
    );
    projectName = foundedProject.projectName;
  }

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-2">
        Your Tasks
      </h2>
      <div className="m-auto w-40 h-1 bg-gray-500 mb-8 rounded-sm"></div>
      <DevTasksFilter
        projectsList={projectsList}
        value={value}
        setValue={setValue}
        setProjectId={setProjectId}
      />
      <Separator className="mt-4" />

      {projectId ? (
        <h1 className="text-xl mt-6 font-bold">
          Tasks for project{' '}
          <span className="text-indigo-500">{projectName}</span>.
        </h1>
      ) : (
        <h1 className="text-xl mt-6 font-bold">
          Tasks for <span className="text-indigo-500">all projects.</span>
        </h1>
      )}

      <DevTasksContainer
        tasksResponse={tasksResponse}
        projectsList={projectsList}
      />
    </section>
  );
};
export default MyTasksPage;
