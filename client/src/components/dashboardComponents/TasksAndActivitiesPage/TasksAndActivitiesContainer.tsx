import { type TaskResponse } from '@/utils';
import { taskStatus } from '@/utils';
import TaskStatusPillar from './TaskStatusPillar';

type TasksAndActivitiesContainerProps = {
  tasks: TaskResponse[];
};

const TasksAndActivitiesContainer = ({
  tasks,
}: TasksAndActivitiesContainerProps) => {
  console.log(tasks);

  return (
    <section className="w-full py-6 grid gap-2 break6:grid-cols-2 break9:grid-cols-3 break14:grid-cols-4 break17:grid-cols-5">
      {taskStatus.map((singleStatus) => {
        const filteredTasks = tasks.filter(
          (singleTask) => singleTask.status === singleStatus
        );
        return (
          <TaskStatusPillar
            key={singleStatus}
            status={singleStatus}
            filteredTasks={filteredTasks}
          />
        );
      })}
    </section>
  );
};
export default TasksAndActivitiesContainer;
