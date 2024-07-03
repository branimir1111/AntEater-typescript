import { customFetch } from '@/utils';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';
import {
  AdminTaskCommentFilter,
  AdminTaskCommentContainer,
  ComplexPagination,
  GlobalLoader,
  ErrorElement,
} from '@/components';

type CommentsTasksQueryParams = {
  sort: string;
  limit: string;
  page: string | number;
};

type SearchParamsType = {
  searchParams: CommentsTasksQueryParams;
};

const commentsTasksQuery = (params: CommentsTasksQueryParams) => {
  const { sort, limit, page } = params;
  return {
    queryKey: [
      'admin-comments-task',
      sort ?? 'newest',
      limit ?? '6',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-admin-task-comments', {
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
      commentsTasksQuery(params as CommentsTasksQueryParams)
    );
    return { searchParams: { ...params } };
  };

const AdminComments = () => {
  const { searchParams } = useLoaderData() as SearchParamsType;
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const { data, isPending, isError } = useQuery(
    commentsTasksQuery(searchParams)
  );

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { numOfTaskComments, numOfPages, currentPage, allTaskComments } = data;
  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="bg-background p-4 rounded-md border">
            <div className="mb-8">
              <h1 className="text-3xl break13:text-5xl break13:font-semibold">
                Task Comments
              </h1>
              <h1 className="text-[#DE911D] mt-2">
                {numOfTaskComments} comments founded
              </h1>
            </div>
            <AdminTaskCommentFilter />
            <AdminTaskCommentContainer allTaskComments={allTaskComments} />
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
export default AdminComments;
