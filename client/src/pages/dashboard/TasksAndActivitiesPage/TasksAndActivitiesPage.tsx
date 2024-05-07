import {
  TasksAndActivitiesFilter,
  TasksAndActivitiesContainer,
} from '@/components';
import { customFetch } from '@/utils';

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
const TasksAndActivitiesPage = () => {
  const { data, isPending, isError } = useQuery(allProjectsQuery());

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }
  const projectsList = data.allProjects;

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      <h1 className="text-3xl">TasksAndActivitiesPage</h1>
      <TasksAndActivitiesFilter projectsList={projectsList} />
      <TasksAndActivitiesContainer />
    </section>
  );
};
export default TasksAndActivitiesPage;
