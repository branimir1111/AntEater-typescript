import { Outlet } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <section className="w-full outlet-hight p-4 bg-background-first">
      <Outlet />
    </section>
  );
};
export default ProjectsPage;
