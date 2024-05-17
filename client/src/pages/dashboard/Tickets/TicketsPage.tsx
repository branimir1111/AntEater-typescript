import { useQuery } from '@tanstack/react-query';
import { customFetch, type ProjectResponse } from '@/utils';
import { useState } from 'react';
import { GlobalLoader } from '@/components';
import { DevTicketsFilter } from '@/components';

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
      'projectsForTickets',
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

const allTicketsDevQuery = (projectId: string) => {
  const params = {
    projectId: projectId,
  };
  return {
    queryKey: ['tickets', projectId],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-tickets', { params });
      return data;
    },
  };
};

const TicketsPage = () => {
  const [value, setValue] = useState('');
  const [projectId, setProjectId] = useState('');

  const { data, isPending, isError } = useQuery(allProjectsQuery());

  const {
    data: allTickets,
    isPending: isPendingTickets,
    isError: isErrorTickets,
  } = useQuery(allTicketsDevQuery(projectId));
  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  if (isPendingTickets) {
    return <GlobalLoader />;
  }
  if (isErrorTickets) {
    return <h1>Error...</h1>;
  }
  console.log(data);
  console.log(allTickets);

  const projectsList = data.allProjects;

  let projectName = '';
  if (projectId) {
    const foundedProject = projectsList.find(
      (project: ProjectResponse) => project._id === projectId
    );
    projectName = foundedProject.projectName;
  }

  return (
    <section className="w-full outlet-hight p-4 bg-background-first">
      <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-2">
        Tickets
      </h2>
      <div className="m-auto w-40 h-1 bg-gray-500 mb-8 rounded-sm"></div>
      {projectId ? (
        <h1 className="text-xl mt-6 font-bold">
          Tickets for project{' '}
          <span className="text-indigo-500">{projectName}</span>.
        </h1>
      ) : (
        <h1 className="text-xl mt-6 font-bold">
          Tickets for <span className="text-indigo-500">all projects.</span>
        </h1>
      )}
      <DevTicketsFilter
        text="Select project to see the tickets associated with it."
        projectsList={projectsList}
        value={value}
        setValue={setValue}
        setProjectId={setProjectId}
      />
      <h1 className="text-3xl">TicketsPage</h1>
    </section>
  );
};
export default TicketsPage;
