import { customFetch } from '@/utils';
import { useQuery } from '@tanstack/react-query';

const MyProjectsPage = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['dev-projects'],
    queryFn: async () => {
      const { data } = await customFetch('/all-projects-dev');
      return data;
    },
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  const {
    numOfAllProjects,
    numOfFilteredProjects,
    numOfPages,
    currentPage,
    // allProjects,
  } = data;

  return (
    <section className="w-full outlet-hight p-4 bg-background-first">
      <h1 className="text-3xl">Total projects: {numOfAllProjects}</h1>
      <h1 className="text-3xl">Filtered projects: {numOfFilteredProjects}</h1>
      <h1 className="text-3xl">Num of pages: {numOfPages}</h1>
      <h1 className="text-3xl">Current Page: {currentPage}</h1>
      {/* <h1 className="text-3xl">{allProjects}</h1> */}
    </section>
  );
};
export default MyProjectsPage;
