import { customFetch, type ProjectUser } from '@/utils';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { GlobalLoader, ErrorElement } from '@/components';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import PMTasksContainer from './PMTasksContainer';
import { ComplexPagination } from '@/components';

type allPMTicketsQueryProps = {
  page: string | number;
};

const allPMTicketsQuery = (params: allPMTicketsQueryProps) => {
  const { page } = params;
  return {
    queryKey: ['all-pm-tickets', page ?? 1],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-pm-tickets', { params });
      return data;
    },
  };
};

const allDevsQuery = () => {
  return {
    queryKey: ['developer'],
    queryFn: () => customFetch('/all-users'),
  };
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(
      allPMTicketsQuery(params as allPMTicketsQueryProps)
    );

    const allDevelopers = await queryClient.ensureQueryData(allDevsQuery());
    const currentDevs = allDevelopers.data.devs;

    return { searchParams: { ...params }, currentDevs };
  };

type SearchParamsProps = {
  searchParams: allPMTicketsQueryProps;
  currentDevs: ProjectUser[];
};

const PMTicketsPage = () => {
  const { searchParams } = useLoaderData() as SearchParamsProps;
  const { data, isPending, isError } = useQuery(
    allPMTicketsQuery(searchParams)
  );

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  console.log(data);

  const { numOfPMTickets, numOfPages, currentPage, allPMTickets } = data;
  return (
    <section className="w-full outlet-hight p-4 bg-background-first">
      <h1 className="text-3xl">PMTicketsPage</h1>
    </section>
  );
};
export default PMTicketsPage;
