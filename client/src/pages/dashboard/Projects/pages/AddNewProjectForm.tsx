import {
  ActionFunction,
  Form,
  useLoaderData,
  redirect,
} from 'react-router-dom';
import {
  FormInput,
  FormSelect,
  FormSelectManagers,
  FormCheckboxDevelopers,
  SubmitBtn,
} from '@/components';
import {
  User,
  customFetch,
  type AllUsersResponse,
  projectStatus,
} from '@/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { AxiosError, AxiosResponse } from 'axios';
import createProject from '@/images/createProject.svg';

export const action =
  (): ActionFunction =>
  async ({ request }) => {
    type EntryData = {
      [k: string]: FormDataEntryValue | string[];
    };
    const formData = await request.formData();
    const data: EntryData = Object.fromEntries(formData);

    let newTeamMembers: string[] = [];
    for (const propertyName in data) {
      if (propertyName.startsWith('teamMembers')) {
        newTeamMembers = [...newTeamMembers, data[propertyName] as string];
        delete data[propertyName];
      }
    }

    data['teamMembers'] = newTeamMembers;

    try {
      const response: AxiosResponse = await customFetch.post(
        '/create-project',
        data
      );
      toast({ description: response.data.msg });
      return redirect('/dashboard/projects');
    } catch (error) {
      const errorMsg =
        error instanceof AxiosError
          ? error.response?.data.msg
          : 'Registration Failed';
      toast({ description: errorMsg });
      return error;
    }
  };

const AddNewProjectForm = () => {
  const { currentDevs, pms } = useLoaderData() as AllUsersResponse;

  const firstNamePmsArray = pms.map((item: User) => {
    const { _id, firstName, lastName } = item;
    return { _id, firstName, lastName };
  });

  const firstNameDevsArray = currentDevs.map((item: User) => {
    const { _id, firstName, lastName } = item;
    return { _id, firstName, lastName };
  });

  const numOfPms = firstNamePmsArray.length;
  const numOfDevs = firstNameDevsArray.length;

  return (
    <div className="w-full p-4">
      {/* Heading */}
      <div className="w-full flex flex-col items-start sm:flex-row sm:items-end gap-4">
        <img src={createProject} alt="create project" className="w-12" />
        <h1 className="text-3xl font-bold capitalize max-sm:text-center">
          create new project
        </h1>
      </div>
      <hr className="my-4" />
      <Form method="post" className="w-full grid place-items-center">
        <div className="w-full grid place-items-start max-w-3xl">
          <p className="w-full font-semibold self-start my-4">
            All fields below are{' '}
            <Badge className="bg-yellow-100 hover:bg-yellow-100 text-yellow-600 text-sm">
              required !
            </Badge>
          </p>
          <div className="w-full grid place-items-start break6:grid-cols-2 max-w-3xl gap-4">
            {/* left side form */}
            <div className="w-full h-full flex flex-col justify-between">
              <FormInput
                type="text"
                name="projectName"
                label="Project Name"
                inputClass="bg-input mt-1"
                placeholder="Type here..."
              />
              <FormSelectManagers
                name="projectManager"
                label={`Project Manager ( ${numOfPms} available )`}
                options={firstNamePmsArray}
                layoutClass="mt-4"
              />
              <FormSelect
                name="status"
                label="Project Status"
                options={projectStatus}
                layoutClass="mt-4"
              />
            </div>
            {/* right side form */}
            <div className="w-full">
              <Label>Developers ( {numOfDevs} available )</Label>
              <ScrollArea className="w-full h-60 rounded-md border pr-16 mt-1">
                {firstNameDevsArray.map((developer) => {
                  const { _id, firstName, lastName } = developer;
                  const name = 'teamMembers' + _id;
                  return (
                    <FormCheckboxDevelopers
                      key={_id}
                      name={name}
                      _id={_id}
                      firstName={firstName}
                      lastName={lastName}
                    />
                  );
                })}
              </ScrollArea>
            </div>
          </div>
          {/* description */}
          <Label className="mt-6 mb-1">Description</Label>
          <Textarea
            name="description"
            className="mt-1 bg-input"
            placeholder="Type here..."
          />
          <SubmitBtn text="Create Project" className="w-full mt-4" />
        </div>
      </Form>
    </div>
  );
};
export default AddNewProjectForm;
