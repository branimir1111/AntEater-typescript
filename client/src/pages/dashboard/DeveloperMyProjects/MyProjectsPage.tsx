import {
  AllProjectsResponseWithParams,
  customFetch,
  type ParamsData,
  type SearchParams,
} from '@/utils';
import { QueryClient, useQuery } from '@tanstack/react-query';
import {
  DevProjectsFilter,
  DevProjects,
  ComplexPagination,
} from '@/components';
import { Separator } from '@/components/ui/separator';
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'react-router-dom';

const myProjectsQuery = (params: ParamsData) => {
  const { search, status, sort, page } = params;
  return {
    queryKey: [
      'dev-projects',
      search ?? '',
      status ?? 'all',
      sort ?? 'newest',
      page ?? '1',
    ],
    queryFn: async () => {
      const { data } = await customFetch('/all-projects-dev', { params });
      return data;
    },
  };
};

// export const loader =
//   (queryClient: QueryClient): LoaderFunction =>
//   async ({ request }): Promise<AllProjectsResponseWithParams> => {
//     const params = Object.fromEntries([
//       ...new URL(request.url).searchParams.entries(),
//     ]);

//     const response = await queryClient.ensureQueryData(myProjectsQuery(params));
//     await queryClient.invalidateQueries({
//       queryKey: ['dev-projects'],
//     });

//     return { params, ...response };
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

export const action =
  (queryClient: QueryClient): ActionFunction =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    await queryClient.ensureQueryData(myProjectsQuery(params));
    return redirect('/dashboard/my-projects');
  };

const MyProjectsPage = () => {
  const { params } = useLoaderData() as AllProjectsResponseWithParams;
  const {
    data: myProjects,
    isPending,
    isError,
  } = useQuery(myProjectsQuery(params));

  if (isPending) {
    return <h1>Loading...</h1>;
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
      <h2 className="text-3xl font-medium tracking-wider capitalize text-center mb-8">
        Your projects
      </h2>
      <Separator />
      <DevProjectsFilter
        numOfAllProjects={numOfAllProjects}
        numOfFilteredProjects={numOfFilteredProjects}
      />
      <DevProjects allProjects={allProjects} />
      <ComplexPagination numOfPages={numOfPages} currentPage={currentPage} />
    </section>
  );
};
export default MyProjectsPage;
