import { Form } from 'react-router-dom';
import { taskType, taskPriority, taskStatus } from '@/utils';
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
import { FilePenLine } from 'lucide-react';
import { FormInput, FormSelect } from '@/components';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { type TaskResponse } from '@/utils';

type EditDevTaskProps = {
  filteredTask: TaskResponse;
  bgColor: string;
  textColor: string;
};

const EditDevTask = ({
  filteredTask,
  bgColor,
  textColor,
}: EditDevTaskProps) => {
  const { _id, title, description } = filteredTask;

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
              <FilePenLine />
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit Task</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px] bg-background-first">
        <DialogHeader>
          <DialogTitle className={`${textColor}`}>Edit Task</DialogTitle>
          <DialogDescription>
            Edit task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form method="post" action={`/dashboard/my-tasks/edit-task/${_id}`}>
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
            name="taskType"
            label="Task Type"
            options={taskType}
            layoutClass="mt-4"
            defaultValue={filteredTask.taskType}
          />
          <FormSelect
            name="priority"
            label="Priority"
            options={taskPriority}
            layoutClass="mt-4"
            defaultValue={filteredTask.priority}
          />
          <FormSelect
            name="status"
            label="Status"
            options={taskStatus}
            layoutClass="mt-4"
            defaultValue={filteredTask.status}
          />
          <DialogFooter className="mt-4">
            <SubmitBtn text="Save" className={`${bgColor}`}></SubmitBtn>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default EditDevTask;
