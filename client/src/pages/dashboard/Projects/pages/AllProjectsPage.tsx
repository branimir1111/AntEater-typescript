import {
  AllProjectsFilter,
  AllProjectsContainer,
  ComplexPagination,
} from '@/components';

const AllProjectsPage = () => {
  return (
    <div className="w-full p-4">
      <AllProjectsFilter />
      <AllProjectsContainer />
      <ComplexPagination />
    </div>
  );
};
export default AllProjectsPage;
