import {
  type ProjectResponse,
  type ProjectUser,
  taskType,
  taskPriority,
  taskStatus,
} from '@/utils';

import { Form, useLoaderData } from 'react-router-dom';
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
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import FormSelectProjects from '@/components/dashboardComponents/DeveloperMyTasksPage/FormSelectProjects';

type SearchParamsProps = {
  currentDevs: ProjectUser[];
};

type ProjectResponseSecond = {
  _id: string;
  projectName: string;
};

export type TaskResponse = {
  readonly _id: string;
  title: string;
  description: string;
  assignedTo: ProjectUser;
  project: ProjectResponseSecond;
  taskType: string;
  priority: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
};

type EditPMTaskProps = {
  allPMProjects: ProjectResponse[];
  task: TaskResponse;
};

const EditPMTask = ({ allPMProjects, task }: EditPMTaskProps) => {
  const { currentDevs } = useLoaderData() as SearchParamsProps;
  const {
    _id,
    title,
    description,
    assignedTo,
    project,
    taskType: typeTask,
    priority,
    status,
  } = task;

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
          <DialogTitle className="text-indigo-500">Edit Task</DialogTitle>
          <DialogDescription>
            Edit task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form
          method="post"
          action={`/dashboard/manager-task/edit-pm-task/${_id}`}
        >
          <FormInput
            name="title"
            type="text"
            label="Title"
            inputClass="bg-input mt-2"
            defaultValue={title}
          />
          <Label className="mt-6 mb-1">Description</Label>
          <Textarea
            name="description"
            className="mt-1 bg-input"
            defaultValue={description}
          />
          <Label>Developers ({currentDevs.length})</Label>
          <ScrollArea className="w-full h-28 rounded-md border mt-1 p-2">
            <RadioGroup defaultValue={assignedTo._id} name="assignedTo">
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
            options={allPMProjects}
            defaultValue={project._id}
          />
          <FormSelect
            name="taskType"
            label="Task Type"
            options={taskType}
            defaultValue={typeTask}
          />
          <FormSelect
            name="priority"
            label="Priority"
            options={taskPriority}
            defaultValue={priority}
          />
          <FormSelect
            name="status"
            label="Status"
            options={taskStatus}
            defaultValue={status}
          />
          <DialogFooter className="mt-4">
            <SubmitBtn text="Save"></SubmitBtn>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default EditPMTask;
