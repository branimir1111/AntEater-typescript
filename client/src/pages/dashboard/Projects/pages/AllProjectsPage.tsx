import {
  AllProjectsFilter,
  AllProjectsContainer,
  ComplexPagination,
} from '@/components';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProjectsPage = () => {
  return (
    <div className="w-full p-4">
      <Button
        variant="secondary"
        className="bg-btn-primary hover:bg-btn-primary-hover text-white mb-8"
        asChild
      >
        <Link to="/dashboard/projects/create">
          <Plus className="w-5 mr-2" />
          Add New Project
        </Link>
      </Button>

      <AllProjectsFilter />
      <AllProjectsContainer />
      <ComplexPagination />
    </div>
  );
};
export default AllProjectsPage;
