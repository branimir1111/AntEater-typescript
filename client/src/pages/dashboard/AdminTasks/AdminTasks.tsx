import { customFetch } from '@/utils';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';
import {
  AdminTasksFilter,
  AdminTasksContainer,
  ComplexPagination,
  GlobalLoader,
  ErrorElement,
} from '@/components';

type allAdminTasksQueryParams = {
  search: string;
  taskType: string;
  priority: string;
  status: string;
  sort: string;
  limit: string;
  page: string | number;
};
type SearchParamsType = {
  searchParams: allAdminTasksQueryParams;
};

const allAdminTasksQuery = (params: allAdminTasksQueryParams) => {
  const { search, taskType, priority, status, sort, limit, page } = params;
  return {
    queryKey: [
      'all-admin-tasks',
      search ?? '',
      taskType ?? 'all',
      priority ?? 'all',
      status ?? 'all',
      sort ?? 'newest',
      limit ?? '5',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-admin-tasks', { params });
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
      allAdminTasksQuery(params as allAdminTasksQueryParams)
    );
    const allDevelopers = await queryClient.ensureQueryData(allDevsQuery());
    const currentDevs = allDevelopers.data.devs;

    return { searchParams: { ...params }, currentDevs };
  };

const AdminTasks = () => {
  const { searchParams } = useLoaderData() as SearchParamsType;
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const { data, isPending, isError } = useQuery(
    allAdminTasksQuery(searchParams)
  );

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { numOfAllTasks, numOfPages, currentPage, allAdminTasks } = data;

  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="bg-background p-4 rounded-md border">
            <div className="mb-8">
              <h1 className="text-3xl break13:text-5xl break13:font-semibold">
                Tasks
              </h1>
              <h1 className="text-[#DE911D] mt-2">
                {numOfAllTasks} tasks founded
              </h1>
            </div>
            <AdminTasksFilter />
            <AdminTasksContainer allAdminTasks={allAdminTasks} />
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
export default AdminTasks;
