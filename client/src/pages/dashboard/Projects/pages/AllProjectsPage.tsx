import {
  AllProjectsFilter,
  AllProjectsContainer,
  ComplexPagination,
} from '@/components';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { customFetch, AllProjectsResponse } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { AllProjectsLoader } from '@/components';

const AllProjectsPage = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-projects');
      return data;
    },
  });
  if (isPending) {
    return <AllProjectsLoader />;
  }
  if (isError) {
    return <h1>Somthing went wrong...</h1>;
  }

  const {
    countAllProjects,
    // currentPage,
    // numOfPages,
    allProjects,
  } = data as AllProjectsResponse;

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

      <AllProjectsFilter countAllProjects={countAllProjects} />
      <AllProjectsContainer allProjects={allProjects} />
      <ComplexPagination />
    </div>
  );
};
export default AllProjectsPage;
