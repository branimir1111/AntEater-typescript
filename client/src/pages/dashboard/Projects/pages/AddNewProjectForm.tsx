import {
  ActionFunction,
  Form,
  LoaderFunction,
  useLoaderData,
} from 'react-router-dom';
import { FormInput, FormSelect } from '@/components';
import { type QueryClient } from '@tanstack/react-query';
import { User, customFetch, type AllUsersResponse } from '@/utils';
import { projectStatus } from '@/utils';
import { SubmitBtn } from '@/components';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import { FormCheckbox } from '@/components';
import { Textarea } from '@/components/ui/textarea';

const allDevsQuery = () => {
  return {
    queryKey: ['developer'],
    queryFn: () => customFetch('/all-users'),
  };
};

export const loader =
  (queryClient: QueryClient): LoaderFunction =>
  async (): Promise<Response | AllUsersResponse | null> => {
    const response = await queryClient.ensureQueryData(allDevsQuery());
    const currentDevs = response.data.devs;
    const pms = response.data.pms;
    return { currentDevs, pms };
  };

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
};

const AddNewProjectForm = () => {
  const { currentDevs, pms } = useLoaderData() as AllUsersResponse;
  const firstNamePmsArray: string[] = pms.map((item: User) => item.firstName);
  const firstNameDevsArray = currentDevs.map((item: User) => {
    const { _id, firstName, lastName } = item;
    return { _id, firstName, lastName };
  });

  return (
    <div className="w-full p-4">
      <Form method="post" className="w-full grid place-items-center">
        <div className="w-full grid place-items-start max-w-3xl">
          <div className="w-full grid place-items-start break6:grid-cols-2 max-w-3xl gap-4">
            {/* left side form */}
            <div className="w-full h-full flex flex-col justify-between">
              <FormInput type="text" name="projectName" label="Project Name" />
              <FormSelect
                name="projectManager"
                label="Project Manager"
                options={firstNamePmsArray}
              />
              <FormSelect
                name="status"
                label="Project Status"
                options={projectStatus}
                layoutClass="mb-0"
              />
            </div>
            {/* right side form */}
            <div className="w-full">
              <Label>Developers</Label>
              <ScrollArea className="h-48 w-full rounded-md border pr-16">
                {firstNameDevsArray.map((developer) => {
                  const { _id, firstName, lastName } = developer;
                  const name = firstName + ' ' + lastName;
                  return <FormCheckbox key={_id} name={name} />;
                })}
              </ScrollArea>
            </div>
          </div>
          {/* description */}
          <Textarea className="mt-8" />
          <SubmitBtn text="Create Project" className="w-full mt-4" />
        </div>
      </Form>
    </div>
  );
};
export default AddNewProjectForm;
