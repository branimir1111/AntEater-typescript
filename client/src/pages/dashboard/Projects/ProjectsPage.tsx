import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <section className="w-full outlet-hight p-4">
      <div className="w-full p-4">
        <Button variant="secondary">
          <Plus />
          Add New Project
        </Button>
      </div>
    </section>
  );
};
export default ProjectsPage;
