import { Outlet, LoaderFunction, useLoaderData } from 'react-router-dom';
import { useQuery, type QueryClient } from '@tanstack/react-query';
import { customFetch, type AllProjectsAndUsersResponse } from '@/utils';

const allDevsQuery = () => {
  return {
    queryKey: ['developer'],
    queryFn: () => customFetch('/all-users'),
  };
};

const allProjectsQuery = () => {
  return {
    queryKey: ['projects'],
    queryFn: () => customFetch.get('/all-projects'),
  };
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async (): Promise<Response | AllProjectsAndUsersResponse | null> => {
    const allDevelopers = await queryClient.ensureQueryData(allDevsQuery());
    const currentDevs = allDevelopers.data.devs;
    const pms = allDevelopers.data.pms;

    const allProjects = await queryClient.ensureQueryData(allProjectsQuery());
    const countAllProjects = allProjects.data.countAllProjects;
    const currentPage = allProjects.data.currentPage;
    const numOfPages = allProjects.data.numOfPages;
    const projectList = allProjects.data.allProjects;

    return {
      currentDevs,
      pms,
      countAllProjects,
      currentPage,
      numOfPages,
      projectList,
    };
  };
const ProjectsPage = () => {
  const { currentDevs, pms, countAllProjects, currentPage, numOfPages } =
    useLoaderData() as AllProjectsAndUsersResponse;

  const { data, isPending, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const data = await customFetch.get('/all-projects');
      return data;
    },
  });
  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  const { allProjects: projectList } = data.data;
  console.log(projectList);

  return (
    <section className="w-full outlet-hight p-4 bg-background-first">
      <Outlet
        context={{
          currentDevs,
          pms,
          countAllProjects,
          currentPage,
          numOfPages,
          projectList,
        }}
      />
    </section>
  );
};
export default ProjectsPage;
