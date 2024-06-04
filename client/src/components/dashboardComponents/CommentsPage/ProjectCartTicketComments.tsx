import { type ProjectForComment } from '@/utils';
import { Badge } from '@/components/ui/badge';

type ProjectCartCommentsProps = {
  isActive: boolean;
  project: ProjectForComment;
  setSingleProjectId: React.Dispatch<React.SetStateAction<string>>;
  setSingleTicketId: React.Dispatch<React.SetStateAction<string>>;
};

const ProjectCartTicketComments = ({
  isActive,
  project,
  setSingleProjectId,
  setSingleTicketId,
}: ProjectCartCommentsProps) => {
  const { _id, projectName, status, tasks } = project;

  let badgeBg = '';
  let badgeTxt = '';
  let badgeBorder = '';

  switch (status) {
    case 'active':
      badgeBg = 'bg-blue-200';
      badgeTxt = 'text-blue-800';
      badgeBorder = 'border-blue-800';
      break;
    case 'inactive':
      badgeBg = 'badge-ghost';
      badgeTxt = '';
      badgeBorder = 'border-blue-900';
      break;
    case 'completed':
      badgeBg = 'bg-emerald-200';
      badgeTxt = 'text-emerald-800';
      badgeBorder = 'border-emerald-800';
      break;
    case 'testing':
      badgeBg = 'bg-purple-200';
      badgeTxt = 'text-purple-800';
      badgeBorder = 'border-purple-800';
      break;
    case 'pending':
      badgeBg = 'bg-yellow-100';
      badgeTxt = 'text-yellow-700';
      badgeBorder = 'border-yellow-700';
      break;
    case 'canceled':
      badgeBg = 'bg-rose-100';
      badgeTxt = 'text-rose-700';
      badgeBorder = 'border-rose-700';
      break;
    case 'delayed':
      badgeBg = 'bg-cyan-100';
      badgeTxt = 'text-cyan-500';
      badgeBorder = 'border-cyan-500';
      break;
  }

  return (
    <article
      className={`w-full bg-indigo-400 bg-opacity-15 cursor-pointer mb-2 p-2 border rounded-sm ${
        isActive ? 'bg-opacity-30 border-indigo-400' : ''
      }  hover:bg-opacity-30 transition-all duration-100 `}
      onClick={() => {
        setSingleProjectId(_id);
        setSingleTicketId(tasks[0]._id);
      }}
    >
      <h1 className="mb-2 text-xl font-semibold">{projectName}</h1>
      <Badge
        className={`rounded-sm ${badgeBg} ${badgeTxt} ${badgeBorder} hover:${badgeBg} hover:${badgeTxt}`}
      >
        {status}
      </Badge>
    </article>
  );
};
export default ProjectCartTicketComments;
