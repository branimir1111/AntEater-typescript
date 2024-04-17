import { Outlet, LoaderFunction, useLoaderData } from 'react-router-dom';
import { type QueryClient } from '@tanstack/react-query';
import { customFetch, type AllUsersResponse } from '@/utils';

const allDevsQuery = () => {
  return {
    queryKey: ['developer'],
    queryFn: () => customFetch('/all-users'),
  };
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async (): Promise<Response | AllUsersResponse | null> => {
    const allDevelopers = await queryClient.ensureQueryData(allDevsQuery());
    const currentDevs = allDevelopers.data.devs;
    const pms = allDevelopers.data.pms;

    return {
      currentDevs,
      pms,
    };
  };
const ProjectsPage = () => {
  const { currentDevs, pms } = useLoaderData() as AllUsersResponse;

  return (
    <section className="w-full outlet-hight p-4 bg-background-third">
      <Outlet
        context={{
          currentDevs,
          pms,
        }}
      />
    </section>
  );
};
export default ProjectsPage;
