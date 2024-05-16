import {
  type TicketResponse,
  type ProjectResponse,
  useAppSelector,
  ticketPriority,
  ticketStatus,
} from '@/utils';
import TicketTypeCart from './TicketTypeCart';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Form } from 'react-router-dom';
import { SubmitBtn, FormInput } from '@/components';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import FormSelectProjects from '../DeveloperMyTasksPage/FormSelectProjects';
import { FormSelect } from '@/components';

type TicketTypePillarProps = {
  type: string;
  filteredTickets: TicketResponse[];
  projectsList: ProjectResponse[];
};

const TicketTypePillar = ({
  type,
  filteredTickets,
  projectsList,
}: TicketTypePillarProps) => {
  const user = useAppSelector((state) => state.userState.user);
  const assignedToUser = user?._id;
  const numOfTickets = filteredTickets.length;

  let textColor = '';
  let bgColor = '';
  let borderColor = '';
  let secondTextColor = '';
  switch (type) {
    case 'feature':
      textColor = 'text-indigo-50';
      bgColor = 'bg-indigo-700';
      borderColor = 'border-indigo-700';
      secondTextColor = 'text-indigo-700';
      break;
    case 'improvement':
      textColor = 'text-[#E1FCF8]';
      bgColor = 'bg-[#099AA4]';
      borderColor = 'border-[#099AA4]';
      secondTextColor = 'text-[#099AA4]';
      break;
    case 'security':
      textColor = 'text-[#FFFBEA]';
      bgColor = 'bg-[#DE911D]';
      borderColor = 'border-[#DE911D]';
      secondTextColor = 'text-[#DE911D]';
      break;
    case 'bug':
      textColor = 'text-[#FFE3E3]';
      bgColor = 'bg-[#AB091E]';
      borderColor = 'border-[#AB091E]';
      secondTextColor = 'text-[#AB091E]';
      break;
  }

  return (
    <div className="w-full flex flex-col">
      <div
        className={`font-bold uppercase w-max h-min px-2 rounded-t-sm ${textColor} ${bgColor}`}
      >
        {type} <span className="font-normal">({numOfTickets})</span>
      </div>
      <div
        className={`w-full min-h-8 h-full p-2 border rounded-tr-sm rounded-b-sm ${borderColor} ${bgColor} bg-opacity-5`}
      >
        <div className="w-full flex items-start justify-end mb-4">
          <Dialog>
            <DialogTrigger
              asChild
              aria-expanded={true}
              className={`${textColor} ${bgColor} hover:${bgColor} hover:${textColor} hover:bg-opacity-80`}
            >
              <Button variant="outline">
                <Plus className="w-4 mr-2" />
                Add New
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  Create{' '}
                  <span className={`uppercase ${secondTextColor} font-bold`}>
                    {type}
                  </span>{' '}
                  Ticket
                </DialogTitle>
                <DialogDescription>
                  Create new ticket here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <Form method="post" action="/dashboard/my-tickets/add-ticket">
                <FormInput
                  name="title"
                  type="text"
                  label="Title"
                  inputClass="bg-input mt-2"
                  placeholder="Type here..."
                />
                <Label className="mt-6 mb-1">Description</Label>
                <Textarea
                  name="description"
                  className="mt-1 bg-input"
                  placeholder="Type here..."
                />
                <FormInput
                  name="assignedTo"
                  type="hidden"
                  defaultValue={`${assignedToUser}`}
                />
                <FormSelectProjects
                  name="projectId"
                  label="Select project"
                  options={projectsList}
                />
                <FormInput
                  name="ticketType"
                  type="hidden"
                  defaultValue={type}
                />
                <FormSelect
                  name="priority"
                  label="Priority"
                  options={ticketPriority}
                  layoutClass="mt-4"
                />
                <FormSelect
                  name="status"
                  label="Status"
                  options={ticketStatus}
                  layoutClass="mt-4"
                />
                <DialogFooter className="mt-4">
                  <SubmitBtn text="Save" className={`${bgColor}`}></SubmitBtn>
                </DialogFooter>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="w-full grid place-items-center gap-2">
          {filteredTickets.map((ticket) => {
            return <TicketTypeCart key={ticket._id} ticket={ticket} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default TicketTypePillar;
