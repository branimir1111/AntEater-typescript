import { customFetch } from '@/utils';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';
import {
  AdminTicketCommentsFilter,
  AdminTicketCommentsContainer,
  ComplexPagination,
  GlobalLoader,
  ErrorElement,
} from '@/components';

type CommentsTicketsQueryParams = {
  sort: string;
  limit: string;
  page: string | number;
};

type SearchParamsType = {
  searchParams: CommentsTicketsQueryParams;
};

const commentsTicketsQuery = (params: CommentsTicketsQueryParams) => {
  const { sort, limit, page } = params;
  return {
    queryKey: [
      'admin-comments-ticket',
      sort ?? 'newest',
      limit ?? '6',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-admin-ticket-comments', {
        params,
      });
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
      commentsTicketsQuery(params as CommentsTicketsQueryParams)
    );
    return { searchParams: { ...params } };
  };

const AdminTicketComments = () => {
  const { searchParams } = useLoaderData() as SearchParamsType;
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const { data, isPending, isError } = useQuery(
    commentsTicketsQuery(searchParams)
  );

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { numOfTicketComments, numOfPages, currentPage, allTicketComments } =
    data;
  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="bg-background p-4 rounded-md border">
            <div className="mb-8">
              <h1 className="text-3xl break13:text-5xl break13:font-semibold">
                Ticket Comments
              </h1>
              <h1 className="text-[#DE911D] mt-2">
                {numOfTicketComments} comments founded
              </h1>
            </div>
            <AdminTicketCommentsFilter />
            <AdminTicketCommentsContainer
              allTicketComments={allTicketComments}
            />
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
export default AdminTicketComments;
