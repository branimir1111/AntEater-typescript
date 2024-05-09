import {
  TasksAndActivitiesFilter,
  TasksAndActivitiesContainer,
} from '@/components';
import { customFetch } from '@/utils';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

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
      'projectsForTasks',
      search ?? '',
      status ?? 'all',
      sort ?? 'newest',
      limit ?? 'all',
      page ?? '1',
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-projects', { params });
      return data;
    },
  };
};

const allTasksQuery = (projectId: string) => {
  const params = {
    projectId: projectId,
  };
  return {
    queryKey: ['all-tasks', projectId],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-tasks', { params });
      return data;
    },
  };
};

const TasksAndActivitiesPage = () => {
  const [value, setValue] = useState('');
  const [projectId, setProjectId] = useState('');

  const { data, isPending, isError } = useQuery(allProjectsQuery());
  const {
    data: tasksResponse,
    isPending: isTasksPending,
    isError: isTasksError,
  } = useQuery(allTasksQuery(projectId));

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  const projectsList = data.allProjects;

  if (isTasksPending) {
    return <h1>Loading...</h1>;
  }
  if (isTasksError) {
    return <h1>Error...</h1>;
  }

  const tasks = tasksResponse.allTasks;

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-8">
        Tasks
      </h2>
      <TasksAndActivitiesFilter
        projectsList={projectsList}
        value={value}
        setValue={setValue}
        setProjectId={setProjectId}
      />
      <Separator className="mt-4" />
      <TasksAndActivitiesContainer tasks={tasks} />
    </section>
  );
};
export default TasksAndActivitiesPage;
