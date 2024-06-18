import { customFetch, type ProjectUser } from '@/utils';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { GlobalLoader, ErrorElement } from '@/components';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';
import PMTicketsContainer from './PMTicketsContainer';
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
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const { data, isPending, isError } = useQuery(
    allPMTicketsQuery(searchParams)
  );

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { numOfPMTickets, numOfPages, currentPage, allPMTickets } = data;
  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-2">
              Your tickets
            </h2>
            <div className="m-auto w-52 h-[2px] bg-gray-500 mb-2 rounded-sm"></div>
            <h1 className="mb-2">
              {numOfPMTickets}{' '}
              <span className="text-muted-foreground">tickets founded</span>{' '}
            </h1>
            <PMTicketsContainer allPMTickets={allPMTickets} />
            <ComplexPagination
              numOfPages={numOfPages}
              currentPage={currentPage}
            />
          </div>
        </section>
      )}
    </>
  );
};
export default PMTicketsPage;
