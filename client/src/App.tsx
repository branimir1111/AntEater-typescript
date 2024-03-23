import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  LandingPage,
  RegisterPage,
  LoginPage,
  ErrorPage,
  DashboardLayout,
  StatisticsPage,
  ProjectsPage,
  TasksAndActivitiesPage,
  TicketsPage,
  BugCategorizationPage,
  ProjectManagerPage,
  AdminPage,
} from './pages';
import { ErrorElement } from './components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <StatisticsPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'tasks',
        element: <TasksAndActivitiesPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'tickets',
        element: <TicketsPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'bugs',
        element: <BugCategorizationPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'manager',
        element: <ProjectManagerPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
