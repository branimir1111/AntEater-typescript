// import { customFetch } from '@/utils';
// import { useQuery } from '@tanstack/react-query';
import { useOutletContext } from 'react-router-dom';
import { type AllProjectsAndUsersResponse } from '@/utils';

const AllProjectsFilter = () => {
  // const { data, isPending, isError } = useQuery({
  //   queryKey: ['projects'],
  //   queryFn: async () => {
  //     const { data } = await customFetch.get('/all-projects');
  //     return data;
  //   },
  // });
  // if (isPending) {
  //   return <h1>Loading...</h1>;
  // }
  // if (isError) {
  //   return <h1>Error...</h1>;
  // }
  const { countAllProjects } =
    useOutletContext() as AllProjectsAndUsersResponse;
  return (
    <div className="w-full">
      <h1>{countAllProjects} projects found</h1>AllProjectsFilter
    </div>
  );
};
export default AllProjectsFilter;
