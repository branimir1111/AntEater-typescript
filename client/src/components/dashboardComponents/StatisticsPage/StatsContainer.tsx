type allStatsProp = {
  numOfAllProjects: number;
};

type StatsContainerProps = {
  allStats: allStatsProp;
};

const StatsContainer = ({ allStats }: StatsContainerProps) => {
  return <div>StatsContainer</div>;
};
export default StatsContainer;
