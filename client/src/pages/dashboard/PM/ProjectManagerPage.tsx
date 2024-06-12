import { QueryClient, useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { GlobalLoader, ComplexPagination } from '@/components';
import PMProjectsFilter from './PMProjectsFilter';
import PMProjectsContainer from './PMProjectsContainer';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';

type allPMProjectsQueryProps = {
  status: string;
  sort: string;
  page: string | number;
};

const allPMProjectsQuery = (params: allPMProjectsQueryProps) => {
  const { status, sort, page } = params;
  return {
    queryKey: ['all-pm-projects', status ?? 'all', sort ?? 'newest', page ?? 1],
    queryFn: async () => {
      const { data } = await customFetch.get('all-projects-pm', { params });
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
      allPMProjectsQuery(params as allPMProjectsQueryProps)
    );

    return { ...params };
  };

const ProjectManagerPage = () => {
  const searchParams = useLoaderData() as allPMProjectsQueryProps;
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const { data: PMData } = useQuery(allPMProjectsQuery(searchParams));

  const { numOfPMProjects, numOfPages, currentPage, allPMProjects } = PMData;
  return (
    <>
      {isPageLoading ? (
        <GlobalLoader />
      ) : (
        <section className="w-full outlet-hight p-8 bg-background-first">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-2">
              Your projects
            </h2>
            <div className="m-auto w-52 h-[2px] bg-gray-500 mb-2 rounded-sm"></div>
            <PMProjectsFilter numOfPMProjects={numOfPMProjects} />
            <PMProjectsContainer allPMProjects={allPMProjects} />
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
export default ProjectManagerPage;
