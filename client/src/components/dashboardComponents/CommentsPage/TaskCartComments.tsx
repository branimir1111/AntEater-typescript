import { type ProjectForComment, type TaskForComment } from '@/utils';
import { CommentCart } from '@/components';
type TaskCartCommentsProps = {
  selectedProject: ProjectForComment;
  singleTaskId: string;
  selectedTask: TaskForComment;
  setSingleTaskId: React.Dispatch<React.SetStateAction<string>>;
};

const TaskCartComments = ({
  selectedProject,
  singleTaskId,
  selectedTask,
  setSingleTaskId,
}: TaskCartCommentsProps) => {
  const { tasks } = selectedProject;

  if (!singleTaskId) {
    singleTaskId = tasks[0]._id;
  }

  return (
    <div className="w-full">
      {tasks.map((task) => {
        const { _id, title, taskType, status, priority } = task;
        const isActive = singleTaskId === _id;
        return (
          <div className="w-full" key={_id}>
            <article
              className={`w-full border border-sky-500 mb-2 p-2 cursor-pointer ${
                isActive ? 'bg-sky-500' : ''
              }`}
              onClick={() => setSingleTaskId(_id)}
            >
              <h1>{title}</h1>
              <h1>{taskType}</h1>
              <h1>{status}</h1>
              <h1>{priority}</h1>
            </article>
            {singleTaskId === _id ? (
              <div className="w-full break15:hidden">
                <CommentCart selectedTask={selectedTask} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
export default TaskCartComments;
