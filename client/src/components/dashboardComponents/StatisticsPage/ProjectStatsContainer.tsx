import { ProjectsStatsAreaChart, ProjectsStatsBarChart } from '@/components';

type ProjectStatus = {
  status: string;
  projects: number;
};

type ProjectStatsContainerProps = {
  projectsByStatus: ProjectStatus[];
};

const ProjectStatsContainer = ({
  projectsByStatus,
}: ProjectStatsContainerProps) => {
  return (
    <div className="mt-4 grid gap-2 break13:grid-cols-2">
      <div>
        <ProjectsStatsAreaChart projectsByStatus={projectsByStatus} />
      </div>
      <div>
        <ProjectsStatsBarChart projectsByStatus={projectsByStatus} />
      </div>
    </div>
  );
};
export default ProjectStatsContainer;
