import { useQuery } from '@tanstack/react-query';
import { customFetch, type ProjectResponse } from '@/utils';
import { useState } from 'react';
import { DevTasksFilter } from '@/components';
import { Separator } from '@/components/ui/separator';
import { DevTicketsContainer } from '@/components';
import { GlobalLoader } from '@/components';

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
    return <GlobalLoader />;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  if (isTicketsPending) {
    return <GlobalLoader />;
  }
  if (isTicketsError) {
    return <h1>Error...</h1>;
  }

  const projectsList = projectsDev.allProjects;

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
      {projectsList > 0 ? (
        <DevTicketsContainer
          ticketsResponse={ticketsResponse}
          projectsList={projectsList}
        />
      ) : (
        <h1 className="mt-4">
          There are still no projects created yet. You must first create at
          least one project in order to assign a ticket to it.
        </h1>
      )}
    </section>
  );
};
export default MyTicketsPage;
