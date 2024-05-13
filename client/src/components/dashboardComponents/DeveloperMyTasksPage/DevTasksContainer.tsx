import { TaskResponse } from '@/utils';
import { taskStatus } from '@/utils';
import DevTasksTable from './DevTasksTable';

type DevTasksResponse = {
  numOfTasks: number;
  allTasks: TaskResponse[];
};

type DevTasksContainerProps = {
  tasksResponse: DevTasksResponse;
};

const DevTasksContainer = ({ tasksResponse }: DevTasksContainerProps) => {
  const { numOfTasks, allTasks } = tasksResponse;

  return (
    <section className="w-full py-6">
      <h1 className="text-xl mb-4">
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
          />
        );
      })}
    </section>
  );
};
export default DevTasksContainer;
