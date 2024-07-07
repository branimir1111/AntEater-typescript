type ProjectStatus = {
  status: string;
  count: number;
};

type ProjectStatsContainerProps = {
  projectsByStatus: ProjectStatus[];
};

const ProjectStatsContainer = ({
  projectsByStatus,
}: ProjectStatsContainerProps) => {
  return <div>ProjectStatsContainer</div>;
};
export default ProjectStatsContainer;
