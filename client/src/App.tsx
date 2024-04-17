import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { store } from './features/store';

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
  ProfilePage,
  AllProjectPage,
  AddNewProjectForm,
  SingleProjectInfo,
  MyProjectsPage,
} from './pages';
import { ErrorElement } from './components';

//! DELETE this page when you finished!!!
import ColorPalettePage from './colorPalette/ColorPalettePage';

import { loader as dashboardLayoutLoader } from './pages/dashboard/DashboardLayout';
import { loader as AllUsersAndProjectsLoader } from './pages/dashboard/Projects/ProjectsPage';
import { loader as AllProjectsLoader } from '@/pages/dashboard/Projects/pages/AllProjectsPage';

import { action as loginAction } from './pages/LoginPage';
import { action as registerAction } from './pages/RegisterPage';
import { action as editProfileAction } from './pages/dashboard/Profile/ProfilePage';
import { action as AddNewProjectAction } from './pages/dashboard/Projects/pages/AddNewProjectForm';

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
    action: registerAction,
  },
  {
    path: 'login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    action: loginAction(store),
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    loader: dashboardLayoutLoader(store),
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
        loader: AllUsersAndProjectsLoader(queryClient),
        children: [
          {
            index: true,
            element: <AllProjectPage />,
            loader: AllProjectsLoader(queryClient),
          },
          {
            path: 'create',
            element: <AddNewProjectForm />,
            action: AddNewProjectAction(store, queryClient),
          },
          {
            path: 'single-project',
            element: <SingleProjectInfo />,
          },
        ],
      },
      {
        path: 'my-projects',
        element: <MyProjectsPage />,
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
      {
        path: 'profile',
        element: <ProfilePage />,
        errorElement: <ErrorElement />,
        action: editProfileAction(store),
      },
      {
        path: 'colors',
        element: <ColorPalettePage />,
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
