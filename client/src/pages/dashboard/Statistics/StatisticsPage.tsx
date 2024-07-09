import { useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { ErrorElement, GlobalLoader } from '@/components';
import {
  StatsContainer,
  ProjectStatsContainer,
  TasksStatsContainer,
  TicketsStatsContainer,
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
const ticketsStatsQuery = () => {
  return {
    queryKey: ['all-tickets-stats'],
    queryFn: async () => {
      const { data } = await customFetch.get('/tickets-stats');
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

  const {
    data: ticketsStats,
    isPending: isPendingTicketStats,
    isError: isErrorTicketStats,
  } = useQuery(ticketsStatsQuery());

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
  if (isPendingTicketStats) {
    return <GlobalLoader />;
  }
  if (isErrorTicketStats) {
    return <ErrorElement />;
  }

  const { numOfAllProjects, projectsByStatus } = projectsStats;
  const { numOfAllTasks, tasksByType, tasksByPriority, tasksByStatus } =
    tasksStats;
  const { numOfAllTickets, ticketsByType, ticketsByPriority, ticketsByStatus } =
    ticketsStats;

  const allStats = { numOfAllProjects, numOfAllTasks, numOfAllTickets };

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
        <TicketsStatsContainer
          ticketsByType={ticketsByType}
          ticketsByPriority={ticketsByPriority}
          ticketsByStatus={ticketsByStatus}
        />
      </div>
    </section>
  );
};
export default StatisticsPage;
