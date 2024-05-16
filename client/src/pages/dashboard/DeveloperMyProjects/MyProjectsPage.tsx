import { customFetch, type ParamsData, type SearchParams } from '@/utils';
import { QueryClient, useQuery } from '@tanstack/react-query';
import {
  DevProjectsFilter,
  DevProjects,
  ComplexPagination,
  DevProjectsLoader,
} from '@/components';
import { Separator } from '@/components/ui/separator';
import {
  // ActionFunction,
  LoaderFunction,
  // redirect,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';

const myProjectsQuery = (params: ParamsData) => {
  const { search, status, sort, page, limit } = params;
  return {
    queryKey: [
      'dev-projects',
      search ?? '',
      status ?? 'all',
      sort ?? 'newest',
      limit ?? '3',
      page ?? '1',
    ],
    queryFn: async () => {
      const { data } = await customFetch('/all-projects-dev', { params });
      return data;
    },
  };
};

// export const action =
//   (queryClient: QueryClient): ActionFunction =>
//   async ({ request }) => {
//     const params = Object.fromEntries([
//       ...new URL(request.url).searchParams.entries(),
//     ]);

//     await queryClient.ensureQueryData(myProjectsQuery(params));

//     return redirect('/dashboard/my-projects');
//   };

type SearchParamsLoader = {
  params: SearchParams;
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ request }): Promise<SearchParamsLoader> => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.invalidateQueries({
      queryKey: ['dev-projects'],
    });

    return { params };
  };

const MyProjectsPage = () => {
  const { params } = useLoaderData() as SearchParamsLoader;
  const navigation = useNavigation();
  const isContentLoading = navigation.state === 'loading';
  const {
    data: myProjects,
    isPending,
    isError,
  } = useQuery(myProjectsQuery(params));

  if (isPending) {
    return (
      <section className="w-full outlet-hight p-8 bg-background-first">
        <DevProjectsLoader />
      </section>
    );
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  const {
    numOfAllProjects,
    numOfFilteredProjects,
    numOfPages,
    currentPage,
    allProjects,
  } = myProjects;

  return (
    <section className="w-full outlet-hight p-8 bg-background-first">
      {isContentLoading ? (
        <DevProjectsLoader />
      ) : (
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-medium tracking-wider capitalize text-center mb-8">
            Your projects
          </h2>
          <Separator />
          <DevProjectsFilter
            numOfAllProjects={numOfAllProjects}
            numOfFilteredProjects={numOfFilteredProjects}
          />
          <DevProjects allProjects={allProjects} />
          <ComplexPagination
            numOfPages={numOfPages}
            currentPage={currentPage}
          />
        </div>
      )}
    </section>
  );
};
export default MyProjectsPage;
