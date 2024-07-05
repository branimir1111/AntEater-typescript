import {
  ErrorElement,
  GlobalLoader,
  ComplexPagination,
  AdminUsersFilter,
  AdminUsersContainer,
} from '@/components';
import { customFetch } from '@/utils';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';

type allAdminUsersQueryProps = {
  sort: string;
  limit: string;
  page: string | number;
};

type SearchParamsProps = {
  searchParams: allAdminUsersQueryProps;
};

const allAdminUsersQuery = (params: allAdminUsersQueryProps) => {
  const { sort, limit, page } = params;
  return {
    queryKey: ['all-admin-users', sort ?? 'newest', limit ?? '5', page ?? 1],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-admin-users', { params });
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(
      allAdminUsersQuery(params as allAdminUsersQueryProps)
    );

    return { searchParams: { ...params } };
  };

const AdminUsers = () => {
  const { searchParams } = useLoaderData() as SearchParamsProps;
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const { data, isPending, isError } = useQuery(
    allAdminUsersQuery(searchParams)
  );
  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { numOfUsers, numOfPages, currentPage, allUsers } = data;

  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="bg-background p-4 rounded-md border">
            <div className="mb-8">
              <h1 className="text-3xl break13:text-5xl break13:font-semibold">
                Users
              </h1>
              <h1 className="text-[#DE911D] mt-2">
                {numOfUsers} users founded
              </h1>
            </div>
            <AdminUsersFilter />
            <AdminUsersContainer allUsers={allUsers} />
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
export default AdminUsers;
