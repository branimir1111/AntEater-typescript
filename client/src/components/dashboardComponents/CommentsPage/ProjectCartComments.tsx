import { type ProjectForComment } from '@/utils';

type ProjectCartCommentsProps = {
  isActive: boolean;
  project: ProjectForComment;
  setSingleProjectId: React.Dispatch<React.SetStateAction<string>>;
  setSingleTaskId: React.Dispatch<React.SetStateAction<string>>;
};

const ProjectCartComments = ({
  isActive,
  project,
  setSingleProjectId,
  setSingleTaskId,
}: ProjectCartCommentsProps) => {
  const { _id, projectName, status, tasks } = project;
  return (
    <article
      className={`w-full border cursor-pointer mb-2 p-2 border-yellow-500 ${
        isActive ? 'bg-yellow-600' : ''
      } `}
      onClick={() => {
        setSingleProjectId(_id);
        setSingleTaskId(tasks[0]._id);
      }}
    >
      <h1>{projectName}</h1>
      <h1>{status}</h1>
    </article>
  );
};
export default ProjectCartComments;
