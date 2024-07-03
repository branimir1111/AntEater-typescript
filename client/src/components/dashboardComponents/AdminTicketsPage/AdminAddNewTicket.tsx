import {
  ticketType,
  ticketPriority,
  type ProjectUser,
  type ProjectResponse,
} from '@/utils';
import { useLoaderData, Form } from 'react-router-dom';
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
import SubmitBtn from '@/components/SubmitBtn';
import { FormInput } from '@/components';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FormSelectProjects from '@/components/dashboardComponents/DeveloperMyTasksPage/FormSelectProjects';
import FormSelect from '@/components/FormSelect';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';

type SearchParamsProps = {
  currentDevs: ProjectUser[];
};

type AdminAddNewTicketProps = {
  allProjectsList: ProjectResponse[];
};

const AdminAddNewTicket = ({ allProjectsList }: AdminAddNewTicketProps) => {
  const { currentDevs } = useLoaderData() as SearchParamsProps;
  return (
    <Dialog>
      <DialogTrigger
        asChild
        aria-expanded={true}
        className="bg-indigo-400 hover:bg-indigo-300"
      >
        <Button variant="outline">
          <Plus className="w-4 mr-2" />
          Add New Ticket
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-background-first">
        <DialogHeader>
          <DialogTitle className="text-indigo-500">
            Create New Ticket
          </DialogTitle>
          <DialogDescription>
            Create new ticket here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form method="post" action="/dashboard/admin-tickets/add-admin-ticket">
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
          <Label>Developers ({currentDevs.length})</Label>
          <ScrollArea className="w-full h-28 rounded-md border mt-1 p-2">
            <RadioGroup defaultValue="comfortable" name="assignedTo">
              {currentDevs.map((dev) => {
                const { _id, firstName, lastName } = dev;
                return (
                  <div key={_id} className="flex items-center space-x-2">
                    <RadioGroupItem value={_id} id="r2" />
                    <Label htmlFor="r2">{firstName + ' ' + lastName}</Label>
                  </div>
                );
              })}
            </RadioGroup>
          </ScrollArea>
          <FormSelectProjects
            name="projectId"
            label="Select project"
            options={allProjectsList}
          />
          <FormSelect
            name="ticketType"
            label="Ticket Type"
            options={ticketType}
          />
          <FormSelect
            name="priority"
            label="Priority"
            options={ticketPriority}
          />
          <DialogFooter className="mt-4">
            <SubmitBtn text="Save"></SubmitBtn>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AdminAddNewTicket;
