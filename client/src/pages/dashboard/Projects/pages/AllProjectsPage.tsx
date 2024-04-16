import {
  AllProjectsFilter,
  AllProjectsContainer,
  ComplexPagination,
  AllProjectsLoader,
  StatusChart,
} from '@/components';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link, LoaderFunction, useNavigation } from 'react-router-dom';
import {
  customFetch,
  type ParamsData,
  type AllProjectsResponseWithParams,
} from '@/utils';
import { type QueryClient } from '@tanstack/react-query';

const allProjectsQuery = (params: ParamsData) => {
  const { search, status, sort, limit, page } = params;
  return {
    queryKey: [
      'projects',
      search ?? '',
      status ?? 'all',
      sort ?? 'newest',
      limit ?? '3',
      page ?? '1',
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-projects', { params });
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ request }): Promise<AllProjectsResponseWithParams> => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await queryClient.ensureQueryData(
      allProjectsQuery(params)
    );
    return { params, ...response };
  };

const AllProjectsPage = () => {
  const navigation = useNavigation();

  const isContentLoading = navigation.state === 'loading';
  return (
    <>
      {isContentLoading ? (
        <AllProjectsLoader />
      ) : (
        <div className="w-full p-4">
          <Button
            variant="secondary"
            className="bg-btn-primary hover:bg-btn-primary-hover text-white mb-8"
            asChild
          >
            <Link to="/dashboard/projects/create">
              <Plus className="w-5 mr-2" />
              Add New Project
            </Link>
          </Button>
          <AllProjectsFilter />
          <AllProjectsContainer />
          <ComplexPagination />
          <hr className="my-4" />
          <StatusChart />
        </div>
      )}
    </>
  );
};
export default AllProjectsPage;
