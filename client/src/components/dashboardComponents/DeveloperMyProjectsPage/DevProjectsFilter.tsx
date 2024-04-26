type DevProjectsFilterProps = {
  numOfAllProjects: number;
  numOfFilteredProjects: number;
};

const DevProjectsFilter = ({
  numOfAllProjects,
  numOfFilteredProjects,
}: DevProjectsFilterProps) => {
  return (
    <section className="w-full mt-8">
      <h1>Total projects: {numOfAllProjects}</h1>
      <h1>My projects: {numOfFilteredProjects}</h1>
    </section>
  );
};
export default DevProjectsFilter;
