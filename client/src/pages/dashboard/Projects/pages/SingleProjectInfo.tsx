import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronsLeft } from 'lucide-react';
import { ProjectResponse, useAppSelector } from '@/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import day from 'dayjs';
import { Badge } from '@/components/ui/badge';
import checkedIcon from '@/images/checked.svg';

const SingleProjectInfo = () => {
  const currentProject = useAppSelector(
    (state) => state.projectState.createdProject
  );
  const {
    projectName,
    description,
    projectManager,
    teamMembers,
    status,
    createdBy,
    createdAt,
  } = currentProject as ProjectResponse;

  const numOfDevelopers = teamMembers.length;

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
  const time = day(createdAt).format('h:mm A');

  return (
    <div className="w-full">
      <Button
        variant="secondary"
        className="bg-btn-primary hover:bg-btn-primary-hover text-white mb-8"
        asChild
      >
        <Link to="/dashboard/projects">
          <ChevronsLeft className="w-5 mr-2" />
          Back To All Projects
        </Link>
      </Button>
      <section className="w-full grid place-items-center">
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <img src={checkedIcon} alt="checked-icon" className="w-10" />
          <h1 className="text-2xl break5:text-4xl font-semibold text-center capitalize">
            project details
          </h1>
        </div>
        <hr className="w-full my-4 border-background" />
        {/* Project Name */}
        <div className="w-full max-w-2xl pl-2">
          <h3 className="font-light text-sm break5:text-lg">Project Name</h3>
          <h1 className="capitalize text-base break5:text-2xl font-semibold">
            {projectName}
          </h1>
        </div>
        {/* Project Description */}
        <div className="w-full max-w-2xl mt-4 border-b border-b-background">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-light text-sm break5:text-lg pl-2 border-t border-t-background">
                Project Description
              </AccordionTrigger>
              <AccordionContent className="pl-2 bg-background pt-4">
                {description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Project Manager */}
        <div className="w-full max-w-2xl mt-4 px-2">
          <h3 className="font-light text-sm break5:text-lg">Project Manager</h3>
          <h1 className="capitalize text-base break5:text-2xl font-semibold">
            {projectManager.firstName + ' ' + projectManager.lastName}
          </h1>
        </div>
        {/* Developers */}
        <div className="w-full max-w-2xl mt-4">
          <h3 className="font-light text-sm break5:text-lg ml-2">
            Developers - ( {numOfDevelopers} assigned )
          </h3>
          <ScrollArea className="w-full h-24 bg-background rounded-md border pl-2 pr-16 mt-1">
            {teamMembers.map((member) => {
              const { _id, firstName, lastName } = member;
              return <p key={_id}>{firstName + ' ' + lastName}</p>;
            })}
          </ScrollArea>
        </div>
        {/* Project Status */}
        <div className="w-full max-w-2xl mt-4 px-2 flex gap-4 items-center">
          <h3 className="font-light text-sm break5:text-lg">Status</h3>
          <Badge
            variant="outline"
            className={`capitalize text-base font-semibold  ${badgeBg} ${badgeTxt}`}
          >
            {status}
          </Badge>
        </div>
        {/* createdBy */}
        <div className="w-full max-w-2xl mt-4 px-2">
          <h3 className="font-light text-sm break5:text-lg">Created By</h3>
          <h1 className="capitalize text-base break5:text-2xl font-semibold">
            {createdBy.firstName + ' ' + createdBy.lastName}
          </h1>
        </div>
        {/* createdAt */}
        <div className="w-full max-w-2xl mt-4 px-2">
          <h3 className="font-light text-sm break5:text-lg">Created At</h3>
          <h1 className="capitalize text-base break5:text-2xl font-semibold">
            {date}, <span className="font-normal break5:text-lg">{time}</span>
          </h1>
        </div>
      </section>
    </div>
  );
};
export default SingleProjectInfo;
