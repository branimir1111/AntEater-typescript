import {
  AdminProjectsFilter,
  AdminProjectsContainer,
  ComplexPagination,
  GlobalLoader,
  ErrorElement,
} from '@/components';
import { customFetch } from '@/utils';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';

type allAdminProjectsQueryParams = {
  search: string;
  status: string;
  sort: string;
  limit: string;
  page: string | number;
};
type SearchParamsType = {
  searchParams: allAdminProjectsQueryParams;
};

const allAdminProjectsQuery = (params: allAdminProjectsQueryParams) => {
  const { search, status, sort, limit, page } = params;
  return {
    queryKey: [
      'all-admin-projects',
      search ?? '',
      status ?? 'all',
      sort ?? 'newest',
      limit ?? '5',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-admin-projects', { params });
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
      allAdminProjectsQuery(params as allAdminProjectsQueryParams)
    );
    const allDevelopers = await queryClient.ensureQueryData(allDevsQuery());
    const currentDevs = allDevelopers.data.devs;

    return { searchParams: { ...params }, currentDevs };
  };

const AdminProjects = () => {
  const { searchParams } = useLoaderData() as SearchParamsType;
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const { data, isPending, isError } = useQuery(
    allAdminProjectsQuery(searchParams)
  );

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { numOfAllProjects, numOfPages, currentPage, allAdminProjects } = data;

  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="bg-background p-4 rounded-md border">
            <div className="mb-8">
              <h1 className="text-3xl break13:text-5xl break13:font-semibold">
                Projects
              </h1>
              <h1 className="text-[#DE911D] mt-2">
                {numOfAllProjects} projects founded
              </h1>
            </div>
            <AdminProjectsFilter />
            <AdminProjectsContainer allAdminProjects={allAdminProjects} />
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
export default AdminProjects;
