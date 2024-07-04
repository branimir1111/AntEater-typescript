import {
  ErrorElement,
  GlobalLoader,
  ComplexPagination,
  AdminMessagesFilter,
  AdminMessagesContainer,
} from '@/components';
import { customFetch } from '@/utils';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';

type allAdminMessagesQueryProps = {
  sort: string;
  limit: string;
  page: string | number;
};

type SearchParamsProps = {
  searchParams: allAdminMessagesQueryProps;
};

const allAdminMessagesQuery = (params: allAdminMessagesQueryProps) => {
  const { sort, limit, page } = params;
  return {
    queryKey: ['all-admin-messages', sort ?? 'newest', limit ?? '5', page ?? 1],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-admin-messages', { params });
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
      allAdminMessagesQuery(params as allAdminMessagesQueryProps)
    );
    return { searchParams: { ...params } };
  };

const AdminMessages = () => {
  const { searchParams } = useLoaderData() as SearchParamsProps;
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const { data, isPending, isError } = useQuery(
    allAdminMessagesQuery(searchParams)
  );
  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { numOfMessages, numOfPages, currentPage, allAdminMessages } = data;

  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="bg-background p-4 rounded-md border">
            <div className="mb-8">
              <h1 className="text-3xl break13:text-5xl break13:font-semibold">
                Messages
              </h1>
              <h1 className="text-[#DE911D] mt-2">
                {numOfMessages} messages founded
              </h1>
            </div>
            <AdminMessagesFilter />
            <AdminMessagesContainer allAdminMessages={allAdminMessages} />
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
export default AdminMessages;
