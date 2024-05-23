import {
  AllProjectsFilter,
  AllProjectsContainer,
  ComplexPagination,
} from '@/components';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link, LoaderFunction, useLoaderData } from 'react-router-dom';
import { customFetch, type ParamsData, type SearchParams } from '@/utils';
import { useQuery, type QueryClient } from '@tanstack/react-query';

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

type SearchParamsProp = {
  searchValues: SearchParams;
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allProjectsQuery(params));
    return { searchValues: { ...params } };
  };

const AllProjectsPage = () => {
  const { searchValues } = useLoaderData() as SearchParamsProp;

  const { data: res } = useQuery(allProjectsQuery(searchValues));

  const {
    numOfAllProjects,
    numOfFilteredProjects,
    allProjects,
    currentPage,
    numOfPages,
  } = res;

  return (
    <div className="w-full">
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
      <ComplexPagination currentPage={currentPage} numOfPages={numOfPages} />
    </div>
  );
};
export default AllProjectsPage;
