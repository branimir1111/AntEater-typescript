import { useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { ErrorElement, GlobalLoader } from '@/components';
import {
  StatsContainer,
  ProjectStatsContainer,
  TasksStatsContainer,
} from '@/components';

const projectsStatsQuery = () => {
  return {
    queryKey: ['all-projects-stats'],
    queryFn: async () => {
      const { data } = await customFetch.get('/projects-stats');
      return data;
    },
  };
};

const tasksStatsQuery = () => {
  return {
    queryKey: ['all-tasks-stats'],
    queryFn: async () => {
      const { data } = await customFetch.get('/tasks-stats');
      return data;
    },
  };
};

const StatisticsPage = () => {
  const {
    data: projectsStats,
    isPending: isPendingProjectStats,
    isError: isErrorProjectStats,
  } = useQuery(projectsStatsQuery());

  const {
    data: tasksStats,
    isPending: isPendingTaskStats,
    isError: isErrorTaskStats,
  } = useQuery(tasksStatsQuery());

  if (isPendingProjectStats) {
    return <GlobalLoader />;
  }
  if (isErrorProjectStats) {
    return <ErrorElement />;
  }
  if (isPendingTaskStats) {
    return <GlobalLoader />;
  }
  if (isErrorTaskStats) {
    return <ErrorElement />;
  }

  const { numOfAllProjects, projectsByStatus } = projectsStats;
  const { numOfAllTasks, tasksByType, tasksByPriority, tasksByStatus } =
    tasksStats;

  const allStats = { numOfAllProjects, numOfAllTasks };

  return (
    <section className="w-full outlet-hight p-2 bg-background-first">
      <div className="bg-background border rounded-md p-4">
        <StatsContainer allStats={allStats} />
        <ProjectStatsContainer projectsByStatus={projectsByStatus} />
        <TasksStatsContainer
          tasksByType={tasksByType}
          tasksByPriority={tasksByPriority}
          tasksByStatus={tasksByStatus}
        />
      </div>
    </section>
  );
};
export default StatisticsPage;
