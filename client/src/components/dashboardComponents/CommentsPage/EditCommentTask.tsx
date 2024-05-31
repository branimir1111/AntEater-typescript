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
import SubmitBtn from '@/components/SubmitBtn';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type EditCommentTaskProps = {
  id: string;
  text: string;
};

const EditCommentTask = ({ id, text }: EditCommentTaskProps) => {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        aria-expanded={true}
        className="cursor-pointer w-5"
      >
        <Button variant="outline" size="lg">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background-first">
        <DialogHeader>
          <DialogTitle>Edit Comment</DialogTitle>
          <DialogDescription>
            Edit comment here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form
          method="post"
          action={`/dashboard/comments/edit-task-comment/${id}`}
          className="px-2"
        >
          <Textarea
            name="text"
            placeholder="Type here..."
            defaultValue={text}
          ></Textarea>
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
export default EditCommentTask;
