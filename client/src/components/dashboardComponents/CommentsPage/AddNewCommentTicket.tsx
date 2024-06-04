import { Form } from 'react-router-dom';
import { useAppSelector } from '@/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import SubmitBtn from '@/components/SubmitBtn';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components';

type AddCommentTicketProps = {
  ticketId: string;
  projectId: string;
};

const AddNewCommentTicket = ({
  ticketId,
  projectId,
}: AddCommentTicketProps) => {
  const user = useAppSelector((state) => state.userState.user);
  const loggedUser = user;
  return (
    <Dialog>
      <DialogTrigger
        asChild
        aria-expanded={true}
        className="cursor-pointer mb-4"
      >
        <Button>New comment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background-first">
        <DialogHeader>
          <DialogTitle>Add Comment</DialogTitle>
          <DialogDescription>
            Add new comment here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form method="post" action="/dashboard/comments/add-ticket-comment">
          <FormInput
            name="createdBy"
            type="hidden"
            defaultValue={`${loggedUser?._id}`}
          />
          <FormInput name="ticketId" type="hidden" defaultValue={ticketId} />
          <FormInput name="projectId" type="hidden" defaultValue={projectId} />
          <Textarea name="text" placeholder="Type here..."></Textarea>
          <DialogFooter className="mt-4">
            <div className="flex justify-end mt-2">
              <SubmitBtn text="Save" />
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AddNewCommentTicket;
