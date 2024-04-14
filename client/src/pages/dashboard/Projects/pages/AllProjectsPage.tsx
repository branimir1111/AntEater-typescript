import {
  AllProjectsFilter,
  AllProjectsContainer,
  ComplexPagination,
} from '@/components';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link, LoaderFunction, useLoaderData } from 'react-router-dom';
import { customFetch, AllProjectsResponse, type ParamsData } from '@/utils';
import { useQuery, type QueryClient } from '@tanstack/react-query';
import { AllProjectsLoader } from '@/components';

const allProjectsQuery = (params: ParamsData) => {
  const { search, status, sort, limit, currentPage } = params;
  return {
    queryKey: [
      'projects',
      search ?? '',
      status ?? 'all',
      sort ?? 'newest',
      limit ?? '3',
      currentPage ?? '1',
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-projects', { params });
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ request }): Promise<Response | ParamsData | null> => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    await queryClient.ensureQueryData(allProjectsQuery(params));
    console.log(params);

    return { params };
  };

const AllProjectsPage = () => {
  const { params } = useLoaderData() as ParamsData;

  const { data, isPending, isError } = useQuery(
    allProjectsQuery(params as ParamsData)
  );

  if (isPending) {
    return <AllProjectsLoader />;
  }
  if (isError) {
    return <h1>Something went wrong...</h1>;
  }

  const {
    numOfAllProjects,
    numOfFilteredProjects,
    // numOfPages,
    // currentPage,
    allProjects,
  } = data as AllProjectsResponse;

  return (
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

      <AllProjectsFilter
        numOfAllProjects={numOfAllProjects}
        numOfFilteredProjects={numOfFilteredProjects}
      />
      <AllProjectsContainer allProjects={allProjects} />
      <ComplexPagination />
    </div>
  );
};
export default AllProjectsPage;
