import { taskType, taskPriority, customFetch, type ProjectUser } from '@/utils';
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
import { Form, useLoaderData } from 'react-router-dom';
import SubmitBtn from '@/components/SubmitBtn';
import { FormInput } from '@/components';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FormSelectProjects from '@/components/dashboardComponents/DeveloperMyTasksPage/FormSelectProjects';
import FormSelect from '@/components/FormSelect';
import { useQuery } from '@tanstack/react-query';
import { GlobalLoader, ErrorElement } from '@/components';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';

const allProjectsQuery = () => {
  return {
    queryKey: ['all-pm-projects-list'],
    queryFn: async () => {
      const { data } = await customFetch.get('/all-projects-pm-list');
      return data;
    },
  };
};

type SearchParamsProps = {
  currentDevs: ProjectUser[];
};

const PMAddNewTask = () => {
  const { currentDevs } = useLoaderData() as SearchParamsProps;
  const { data, isPending, isError } = useQuery(allProjectsQuery());
  if (isPending) {
    return <GlobalLoader />;
  }
  if (isError) {
    return <ErrorElement />;
  }

  const { allPMProjects } = data;

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
        <Form method="post" action="/dashboard/manager/add-pm-task">
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
          <Label>Developers</Label>
          <ScrollArea className="w-full h-32 rounded-md border mt-2 p-2">
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
            options={allPMProjects}
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
export default PMAddNewTask;
