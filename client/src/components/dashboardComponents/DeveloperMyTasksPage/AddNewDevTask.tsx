import { type ProjectResponse, taskType, taskPriority } from '@/utils';
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
import { FormInput } from '@/components';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FormSelectProjects from './FormSelectProjects';
import FormSelect from '@/components/FormSelect';

type AddNewDevTaskProps = {
  assignedToUser: string | undefined;
  projectsList: ProjectResponse[];
};

const AddNewDevTask = ({
  assignedToUser,
  projectsList,
}: AddNewDevTaskProps) => {
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
      <DialogContent className="sm:max-w-[425px] bg-background-first">
        <DialogHeader>
          <DialogTitle className="text-indigo-500">Create New Task</DialogTitle>
          <DialogDescription>
            Create new task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form method="post" action="/dashboard/my-tasks/add-task">
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
          <FormSelect
            name="taskType"
            label="Task Type"
            options={taskType}
            layoutClass="mt-4"
          />
          <FormSelect
            name="priority"
            label="Priority"
            options={taskPriority}
            layoutClass="mt-4"
          />
          <DialogFooter className="mt-4">
            <SubmitBtn text="Save"></SubmitBtn>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AddNewDevTask;
