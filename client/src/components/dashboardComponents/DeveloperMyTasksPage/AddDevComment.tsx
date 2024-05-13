import { Form } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import SubmitBtn from '@/components/SubmitBtn';
import { MessageSquareMore } from 'lucide-react';

const AddDevComment = () => {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger
              asChild
              aria-expanded={true}
              className="cursor-pointer w-5"
            >
              <MessageSquareMore />
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add comment</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Comment</DialogTitle>
          <DialogDescription>
            Create new comment here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form method="post" action="/dashboard/my-tasks/add-comment">
          <DialogFooter>
            <SubmitBtn text="Save"></SubmitBtn>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AddDevComment;
