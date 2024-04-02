import { Button } from '@/components/ui/button';
import { Plus, ChevronsLeft } from 'lucide-react';
import { useState } from 'react';
import AllProjectsPage from './pages/AllProjectsPage';
import AddNewProjectForm from './pages/AddNewProjectForm';

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
