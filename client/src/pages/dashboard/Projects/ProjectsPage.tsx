import { Button } from '@/components/ui/button';
import { Plus, ChevronsLeft } from 'lucide-react';
import { useState } from 'react';
import AllProjectsPage from './pages/AllProjectsPage';
import AddNewProjectForm from './pages/AddNewProjectForm';
import { LoaderFunction } from 'react-router-dom';
import { customFetch, type AllProjectsAndUsersResponse } from '@/utils';
import { type QueryClient } from '@tanstack/react-query';

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
  const [allProjects, setAllProjects] = useState(true);
  return (
    <section className="w-full outlet-hight p-4">
      <div className="w-full p-4">
        {allProjects ? (
          <Button variant="secondary" onClick={() => setAllProjects(false)}>
            <Plus className="w-5 mr-2" />
            Add New Project
          </Button>
        ) : (
          <Button variant="secondary" onClick={() => setAllProjects(true)}>
            <ChevronsLeft className="w-5 mr-2" />
            Back To All Projects
          </Button>
        )}
      </div>
      <div>{allProjects ? <AllProjectsPage /> : <AddNewProjectForm />}</div>
    </section>
  );
};
export default ProjectsPage;
