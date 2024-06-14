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
  MyTasksPage,
  MyTicketsPage,
  PMTasksPage,
  PMTicketsPage,
  AdminManageRolesPage,
  AdminAssignTaskPage,
  AdminAssignTicketPage,
  AdminMemberProfilesPage,
  CommentsPageLayout,
} from './pages';
import { ErrorElement } from './components';

import ColorPalettePage from './colorPalette/ColorPalettePage';

import { loader as dashboardLayoutLoader } from './pages/dashboard/DashboardLayout';
import { loader as AllDevLoader } from '@/pages/dashboard/Projects/pages/AddNewProjectForm';
import { loader as AllProjectsLoader } from '@/pages/dashboard/Projects/pages/AllProjectsPage';
import { loader as MyProjectsDevLoader } from '@/pages/dashboard/DeveloperMyProjects/MyProjectsPage';
import { loader as AllTicketsLoader } from '@/pages/dashboard/Tickets/TicketsPage';
import { loader as AllPMProjectsLoader } from '@/pages/dashboard/PM/ProjectManagerPage';
import { loader as AllPMTasksLoader } from '@/pages/dashboard/PMTasks/PMTasksPage';

import { action as loginAction } from './pages/LoginPage';
import { action as registerAction } from './pages/RegisterPage';
import { action as editProfileAction } from './pages/dashboard/Profile/ProfilePage';
import { action as AddNewProjectAction } from './pages/dashboard/Projects/pages/AddNewProjectForm';
import { action as AddNewDevTaskAction } from '@/pages/dashboard/DeveloperMyTasks/AddTask';
import { action as EditDevTaskAction } from '@/pages/dashboard/DeveloperMyTasks/EditTask';
import { action as AddNewDevTicketAction } from '@/pages/dashboard/DeveloperMyTickets/AddTicket';
import { action as EditDevTicketAction } from '@/pages/dashboard/DeveloperMyTickets/EditTicket';
import { action as AddNewTaskCommentAction } from '@/pages/dashboard/Comments/AddComment';
import { action as EditTaskCommentAction } from '@/pages/dashboard/Comments/EditComment';
import { action as AddNewTicketCommentAction } from '@/pages/dashboard/Comments/AddCommentTicket';
import { action as EditTicketCommentAction } from '@/pages/dashboard/Comments/EditCommentTicket';
import { action as EditPMProjectAction } from '@/pages/dashboard/PM/EditProject';
import { action as AddNewPMTaskAction } from '@/pages/dashboard/PMTasks/AddPMTask';

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
        children: [
          {
            index: true,
            element: <AllProjectPage />,
            loader: AllProjectsLoader(queryClient),
          },
          {
            path: 'create',
            element: <AddNewProjectForm />,
            loader: AllDevLoader(queryClient),
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
        loader: MyProjectsDevLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'tasks',
        element: <TasksAndActivitiesPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'my-tasks',
        element: <MyTasksPage />,
        errorElement: <ErrorElement />,
        children: [
          {
            path: 'add-task',
            action: AddNewDevTaskAction(queryClient),
          },
          {
            path: 'edit-task/:id',
            action: EditDevTaskAction(queryClient),
          },
        ],
      },
      {
        path: 'tickets',
        element: <TicketsPage />,
        errorElement: <ErrorElement />,
        loader: AllTicketsLoader(queryClient),
      },
      {
        path: 'my-tickets',
        element: <MyTicketsPage />,
        errorElement: <ErrorElement />,
        children: [
          {
            path: 'add-ticket',
            action: AddNewDevTicketAction(queryClient),
          },
          {
            path: 'edit-ticket/:id',
            action: EditDevTicketAction(queryClient),
          },
        ],
      },
      {
        path: 'comments',
        element: <CommentsPageLayout />,
        errorElement: <ErrorElement />,
        children: [
          {
            path: 'add-task-comment',
            action: AddNewTaskCommentAction(queryClient),
          },
          {
            path: 'edit-task-comment/:id',
            action: EditTaskCommentAction(queryClient),
          },
          {
            path: 'add-ticket-comment',
            action: AddNewTicketCommentAction(queryClient),
          },
          {
            path: 'edit-ticket-comment/:id',
            action: EditTicketCommentAction(queryClient),
          },
        ],
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
        loader: AllPMProjectsLoader(queryClient),
        children: [
          {
            path: 'edit-pm-project/:id',
            action: EditPMProjectAction(queryClient),
          },
          {
            path: 'add-pm-task',
            action: AddNewPMTaskAction(queryClient),
          },
        ],
      },
      {
        path: 'manager-task',
        element: <PMTasksPage />,
        errorElement: <ErrorElement />,
        loader: AllPMTasksLoader(queryClient),
      },
      {
        path: 'manager-ticket',
        element: <PMTicketsPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'admin-manage-roles',
        element: <AdminManageRolesPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'admin-assign-task',
        element: <AdminAssignTaskPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'admin-assign-ticket',
        element: <AdminAssignTicketPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'admin-member-profiles',
        element: <AdminMemberProfilesPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
        errorElement: <ErrorElement />,
        action: editProfileAction(store, queryClient),
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
