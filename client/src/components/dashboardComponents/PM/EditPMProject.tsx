import { type ProjectResponse } from '@/utils';

import { Form } from 'react-router-dom';
import { projectStatus } from '@/utils';
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

type EditPMProjectProps = {
  project: ProjectResponse;
};

const EditPMProject = ({ project }: EditPMProjectProps) => {
  const { _id, projectName, description, teamMembers, status } = project;
  //   console.log(teamMembers);

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
            <p>Edit Project</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px] bg-background-first">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
          <DialogDescription>
            Edit project here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form
          method="post"
          action={`/dashboard/manager/edit-pm-project/${_id}`}
        >
          <FormInput
            name="projectName"
            type="text"
            label="Project name"
            inputClass="bg-input mt-2"
            placeholder="Type here..."
            defaultValue={projectName}
          />
          <Label className="mt-6 mb-1">Description</Label>
          <Textarea
            name="description"
            className="mt-1 bg-input"
            placeholder="Type here..."
            defaultValue={description}
          />
          {/* <FormSelect
            name="taskType"
            label="Task Type"
            options={taskType}
            layoutClass="mt-4"
            defaultValue={filteredTask.taskType}
          /> */}
          <FormSelect
            name="status"
            label="Status"
            options={projectStatus}
            layoutClass="mt-4"
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
export default EditPMProject;
