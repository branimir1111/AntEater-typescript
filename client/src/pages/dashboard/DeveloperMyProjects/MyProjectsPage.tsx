import { customFetch } from '@/utils';
import { QueryClient, useQuery } from '@tanstack/react-query';
import {
  DevProjectsFilter,
  DevProjects,
  ComplexPagination,
} from '@/components';
import { Separator } from '@/components/ui/separator';

const myProjectsQuery = {
  queryKey: ['dev-projects'],
  queryFn: async () => {
    const { data } = await customFetch('/all-projects-dev');
    return data;
  },
};
export const loader = (queryClient: QueryClient) => async () => {
  await queryClient.invalidateQueries({
    queryKey: ['dev-projects'],
  });
  return null;
};

const MyProjectsPage = () => {
  const { data: myProjects, isPending, isError } = useQuery(myProjectsQuery);

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  console.log(myProjects);

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
