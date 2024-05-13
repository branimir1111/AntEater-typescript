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
import { Form } from 'react-router-dom';
import { Plus } from 'lucide-react';
import SubmitBtn from '@/components/SubmitBtn';

const AddNewDevTask = () => {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        aria-expanded={true}
        className="bg-indigo-400 hover:bg-indigo-300"
      >
        <Button variant="outline">
          <Plus className="w-4 mr-2" />
          Add New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription>
            Create new task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form method="post" action="/dashboard/my-tasks/add-task">
          <DialogFooter>
            <SubmitBtn text="Save"></SubmitBtn>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AddNewDevTask;
