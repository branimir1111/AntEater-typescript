import { customFetch, type ProjectUser } from '@/utils';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { GlobalLoader, ErrorElement } from '@/components';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';
import PMTasksContainer from './PMTasksContainer';
import { ComplexPagination } from '@/components';

type allPMTasksQueryProps = {
  page: string | number;
};

const allPMTasksQuery = (params: allPMTasksQueryProps) => {
  const { page } = params;
  return {
    queryKey: ['all-pm-tasks', page ?? 1],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-tasks-pm', { params });
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
      allPMTasksQuery(params as allPMTasksQueryProps)
    );

    const allDevelopers = await queryClient.ensureQueryData(allDevsQuery());
    const currentDevs = allDevelopers.data.devs;

    return { searchParams: { ...params }, currentDevs };
  };

type SearchParamsProps = {
  searchParams: allPMTasksQueryProps;
  currentDevs: ProjectUser[];
};

const PMTasksPage = () => {
  const { searchParams } = useLoaderData() as SearchParamsProps;
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const { data, isPending, isError } = useQuery(allPMTasksQuery(searchParams));

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { numOfPMTasks, numOfPages, currentPage, allPMTasks } = data;

  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-2">
              Your tasks
            </h2>
            <div className="m-auto w-52 h-[2px] bg-gray-500 mb-2 rounded-sm"></div>
            <h1 className="mb-2">
              {numOfPMTasks}{' '}
              <span className="text-muted-foreground">tasks founded</span>{' '}
            </h1>
            <PMTasksContainer allPMTasks={allPMTasks} />
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
export default PMTasksPage;
