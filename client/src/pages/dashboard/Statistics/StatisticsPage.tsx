import { useQuery } from '@tanstack/react-query';
import { customFetch } from '@/utils';
import { ErrorElement, GlobalLoader } from '@/components';
import {
  StatsContainer,
  ProjectStatsContainer,
  TasksStatsContainer,
  TicketsStatsContainer,
  UsersStatsContainer,
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
const usersStatsQuery = () => {
  return {
    queryKey: ['all-users-stats'],
    queryFn: async () => {
      const { data } = await customFetch.get('/user-stats');
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

  const {
    data: usersStats,
    isPending: isPendingUserStats,
    isError: isErrorUsersStats,
  } = useQuery(usersStatsQuery());

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
  if (isPendingUserStats) {
    return <GlobalLoader />;
  }
  if (isErrorUsersStats) {
    return <ErrorElement />;
  }

  const { numOfAllProjects, projectsByStatus } = projectsStats;
  const { numOfAllTasks, tasksByType, tasksByPriority, tasksByStatus } =
    tasksStats;
  const { numOfAllTickets, ticketsByType, ticketsByPriority, ticketsByStatus } =
    ticketsStats;
  const { numOfComments, numOfMessages, numOfUsers, usersByRole } = usersStats;

  const allStats = {
    numOfAllProjects,
    numOfAllTasks,
    numOfAllTickets,
    numOfComments,
    numOfMessages,
    numOfUsers,
  };

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
        <UsersStatsContainer usersByRole={usersByRole} />
      </div>
    </section>
  );
};
export default StatisticsPage;
