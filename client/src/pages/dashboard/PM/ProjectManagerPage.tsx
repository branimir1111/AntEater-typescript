import { useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { GlobalLoader, ErrorElement } from '@/components';

const allPMProjectsQuery = () => {
  return {
    queryKey: ['all-pm-projects'],
    queryFn: async () => {
      const { data } = await customFetch.get('all-projects-pm');
      return data;
    },
  };
};

const ProjectManagerPage = () => {
  const { data, isPending, isError } = useQuery(allPMProjectsQuery());

  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  console.log(data);

  return (
    <section className="w-full outlet-hight p-4 bg-background-first">
      <h1 className="text-3xl">PM Projects</h1>
    </section>
  );
};
export default ProjectManagerPage;
