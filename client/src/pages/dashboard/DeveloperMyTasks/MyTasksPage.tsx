import { DevTasksFilter, DevTasksContainer } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';

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
      const { data } = await customFetch.get('/all-projects-dev', { params });
      return data;
    },
  };
};

const MyTasksPage = () => {
  const { data: projects, isPending, isError } = useQuery(allProjectsQuery());

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  console.log(projects);

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-2">
        Your Tasks
      </h2>
      <div className="m-auto w-40 h-1 bg-gray-500 mb-8 rounded-sm"></div>
      <DevTasksFilter />
      <DevTasksContainer />
    </section>
  );
};
export default MyTasksPage;
