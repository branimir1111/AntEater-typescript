import { type TaskResponse } from '@/utils';

type TasksAndActivitiesContainerProps = {
  tasks: TaskResponse[];
};

const TasksAndActivitiesContainer = ({
  tasks,
}: TasksAndActivitiesContainerProps) => {
  console.log(tasks);

  return (
    <section className="w-full">
      {tasks.map((task) => {
        const { _id, title } = task;
        return <h1 key={_id}>{title}</h1>;
      })}
    </section>
  );
};
export default TasksAndActivitiesContainer;
