import { useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { useState } from 'react';
import { DevTasksFilter } from '@/components';
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

const allTicketsDevQuery = (projectId: string) => {
  const params = {
    projectId: projectId,
  };
  return {
    queryKey: ['all-dev-tickets', projectId],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-dev-tickets', { params });
      return data;
    },
  };
};

const MyTicketsPage = () => {
  const [value, setValue] = useState('');
  const [projectId, setProjectId] = useState('');

  const {
    data: projectsDev,
    isPending,
    isError,
  } = useQuery(allProjectsQuery());

  const {
    data: ticketsResponse,
    isPending: isTicketsPending,
    isError: isTicketsError,
  } = useQuery(allTicketsDevQuery(projectId));

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  if (isTicketsPending) {
    return <h1>Loading...</h1>;
  }
  if (isTicketsError) {
    return <h1>Error...</h1>;
  }

  const projectsList = projectsDev.allProjects;

  console.log(projectsList);
  console.log(ticketsResponse);

  return (
    <section className="w-full outlet-hight p-4 bg-background-first">
      <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-2">
        Your Tickets
      </h2>
      <div className="m-auto w-48 h-1 bg-gray-500 mb-8 rounded-sm"></div>
      <DevTasksFilter
        text="Select your project to see the tickets associated with it."
        projectsList={projectsList}
        value={value}
        setValue={setValue}
        setProjectId={setProjectId}
      />
      <Separator className="mt-4" />
    </section>
  );
};
export default MyTicketsPage;
