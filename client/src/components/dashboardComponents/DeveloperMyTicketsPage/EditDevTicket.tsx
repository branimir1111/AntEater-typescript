import { Form } from 'react-router-dom';
import { type TicketResponse } from '@/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FormInput, FormSelect } from '@/components';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SubmitBtn from '@/components/SubmitBtn';
import { ticketStatus, ticketPriority } from '@/utils';
import day from 'dayjs';

type EditDevTicketProps = {
  ticket: TicketResponse;
  textColor: string;
  bgColor: string;
};

const EditDevTicket = ({ ticket, textColor, bgColor }: EditDevTicketProps) => {
  const { _id, title, description, updatedAt } = ticket;

  const date = day(updatedAt).format('D MMM YYYY');

  return (
    <Dialog>
      <DialogTrigger asChild aria-expanded={true}>
        <Button
          variant="ghost"
          size="sm"
          className={`${bgColor}  hover:${bgColor} hover:bg-opacity-80 ${textColor} hover:${textColor}`}
        >
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Ticket</DialogTitle>
          <DialogDescription>
            Edit ticket here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <p>
          <span className="text-muted-foreground">Last update: </span>
          {date}
        </p>
        <Form method="post" action={`/dashboard/my-tickets/edit-ticket/${_id}`}>
          <FormInput
            name="title"
            type="text"
            label="Title"
            inputClass="bg-input mt-2"
            placeholder="Type here..."
            defaultValue={title}
          />
          <Label className="mt-6 mb-1">Description</Label>
          <Textarea
            name="description"
            className="mt-1 bg-input"
            placeholder="Type here..."
            defaultValue={description}
          />
          <FormSelect
            name="priority"
            label="Priority"
            options={ticketPriority}
            layoutClass="mt-4"
            defaultValue={ticket.priority}
          />
          <FormSelect
            name="status"
            label="Status"
            options={ticketStatus}
            layoutClass="mt-4"
            defaultValue={ticket.status}
          />
          <DialogFooter className="mt-4">
            <SubmitBtn text="Save"></SubmitBtn>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default EditDevTicket;
