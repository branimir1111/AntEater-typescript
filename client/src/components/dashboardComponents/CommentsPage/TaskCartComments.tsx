import { type ProjectForComment } from '@/utils';

type TaskCartCommentsProps = {
  selectedProject: ProjectForComment;
};

const TaskCartComments = ({ selectedProject }: TaskCartCommentsProps) => {
  const { tasks } = selectedProject;

  return (
    <div className="w-full">
      {tasks.map((task) => {
        const { _id, title, taskType, status, priority } = task;
        return (
          <article key={_id} className={`w-full border mb-2 p-2`}>
            <h1>{title}</h1>
            <h1>{taskType}</h1>
            <h1>{status}</h1>
            <h1>{priority}</h1>
          </article>
        );
      })}
    </div>
  );
};
export default TaskCartComments;
