import { type TaskResponse, type ProjectResponse, taskStatus } from '@/utils';
import DevTasksTable from './DevTasksTable';

type DevTasksResponse = {
  numOfTasks: number;
  allTasks: TaskResponse[];
};

type DevTasksContainerProps = {
  tasksResponse: DevTasksResponse;
  projectsList: ProjectResponse[];
};

const DevTasksContainer = ({
  tasksResponse,
  projectsList,
}: DevTasksContainerProps) => {
  const { numOfTasks, allTasks } = tasksResponse;

  return (
    <section className="w-full py-4">
      <h1 className="text-base mb-4 text-muted-foreground">
        You are assigned to {numOfTasks} task{numOfTasks > 1 ? 's' : null}
      </h1>
      {taskStatus.map((singleStatus) => {
        const filteredTasks = allTasks.filter(
          (singleTask) => singleTask.status === singleStatus
        );
        return (
          <DevTasksTable
            key={singleStatus}
            status={singleStatus}
            filteredTasks={filteredTasks}
            projectsList={projectsList}
          />
        );
      })}
    </section>
  );
};
export default DevTasksContainer;
