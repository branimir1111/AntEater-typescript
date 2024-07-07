import { useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { ErrorElement, GlobalLoader } from '@/components';
import { StatsContainer } from '@/components';

const StatisticsPage = () => {
  const {
    data: projectsStats,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['all-projects-stats'],
    queryFn: async () => {
      const { data } = await customFetch.get('/projects-stats');
      return data;
    },
  });
  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { numOfAllProjects, projectsByStatus } = projectsStats;

  const allStats = { numOfAllProjects };

  return (
    <section className="w-full outlet-hight p-2 bg-background-first">
      <div className="bg-background border rounded-md p-4">
        <StatsContainer allStats={allStats} />
      </div>
    </section>
  );
};
export default StatisticsPage;
