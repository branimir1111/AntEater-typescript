import day from 'dayjs';
import { Link, Form } from 'react-router-dom';
import { type ProjectUser } from '@/utils';
import { UserCog, CalendarPlus, CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type ProjectCartState = {
  _id: string;
  projectName: string;
  projectManager: ProjectUser;
  createdBy: ProjectUser;
  createdAt: string;
  status: string;
};

const ProjectCart = ({
  _id,
  projectName,
  projectManager,
  createdBy,
  createdAt,
  status,
}: ProjectCartState) => {
  let badgeBg = 'bg-primary';
  let badgeTxt = 'text-primary-content';

  switch (status) {
    case 'active':
      badgeBg = 'bg-blue-200';
      badgeTxt = 'text-blue-800';
      break;
    case 'inactive':
      badgeBg = 'badge-ghost';
      badgeTxt = '';
      break;
    case 'completed':
      badgeBg = 'bg-emerald-200';
      badgeTxt = 'text-emerald-800';
      break;
    case 'testing':
      badgeBg = 'bg-purple-200';
      badgeTxt = 'text-purple-800';
      break;
    case 'pending':
      badgeBg = 'bg-yellow-100';
      badgeTxt = 'text-yellow-700';
      break;
    case 'canceled':
      badgeBg = 'bg-rose-100';
      badgeTxt = 'text-rose-700';
      break;
    case 'delayed':
      badgeBg = 'bg-cyan-100';
      badgeTxt = 'text-cyan-500';
      break;
  }

  const date = day(createdAt).format('D MMM YYYY');

  return (
    <article className="w-full p-4 rounded-md shadow-sm border bg-background">
      <header className="w-full flex items-center gap-4 text-base-content">
        <div className="w-16 h-16 text-3xl rounded-md bg-slate-600 text-slate-100 grid place-items-center uppercase">
          {projectName.charAt(0)}
        </div>
        <div className="text-2xl capitalize">
          <p className="text-base-content font-medium">{projectName}</p>
          <Badge variant="outline" className={`${badgeBg} ${badgeTxt}`}>
            {status}
          </Badge>
        </div>
      </header>
      <hr className="w-full border-t-[1px] my-2 border-base-300" />
      <section className="w-full">
        <div className="w-full flex items-center gap-2 mt-6">
          <UserCog className="w-5" />
          <p className="font-medium">
            {projectManager.firstName + ' ' + projectManager.lastName}
          </p>
        </div>
        <p className="pl-7 text-xs">(project manager)</p>
        <div className="w-full flex flex-col my-4 justify-between">
          <p className="flex items-center gap-2 font-medium">
            <CalendarPlus className="w-5" />
            {createdBy.firstName + ' ' + createdBy.lastName}
          </p>
          <p className="pl-7 text-xs">(project creator)</p>
          <p className="flex items-center gap-2 mt-4 font-medium">
            <CalendarDays className="w-5" />
            {date}
          </p>
          <p className="pl-7 text-xs">(created at)</p>
        </div>
      </section>

      <hr className="w-full border-t-[1px] my-2 border-base-300" />
      <footer className="w-full flex gap-4 justify-end mt-4">
        <Link
          to={'/dashboard/allprojects'}
          className="btn btn-sm btn-secondary text-secondary-content rounded-md"
        >
          Edit
        </Link>
        <Form method="post" action={`./delete-project/${_id}`}>
          <button
            type="submit"
            className="btn btn-sm btn-error text-error-content rounded-md"
          >
            Delete
          </button>
        </Form>
      </footer>
    </article>
  );
};
export default ProjectCart;
