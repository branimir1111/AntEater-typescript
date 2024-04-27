import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from '@/components/FormInput';
import {
  projectStatusFilter,
  projectSortFilter,
  type AllProjectsResponseWithParams,
} from '@/utils';
import FormSelect from '@/components/FormSelect';
import { Button } from '@/components/ui/button';
import SubmitBtn from '@/components/SubmitBtn';

type DevProjectsFilterProps = {
  numOfAllProjects: number;
  numOfFilteredProjects: number;
};

const DevProjectsFilter = ({
  numOfAllProjects,
  numOfFilteredProjects,
}: DevProjectsFilterProps) => {
  const { params } = useLoaderData() as AllProjectsResponseWithParams;
  const { search, status, sort } = params;
  return (
    <section className="w-full mt-8">
      <h1>Total projects: {numOfAllProjects}</h1>
      <h1>My projects: {numOfFilteredProjects}</h1>
      <Form>
        <FormInput
          type="search"
          name="search"
          placeholder="Project name..."
          inputClass="bg-input mt-1"
          defaultValue={search}
        />
        <FormSelect
          name="status"
          options={projectStatusFilter}
          layoutClass="mt-4"
          defaultValue={status}
        />
        <FormSelect
          name="sort"
          options={projectSortFilter}
          layoutClass="mt-4"
          defaultValue={sort}
        />
        <Link to={'/dashboard/my-projects'}>
          <Button
            variant="outline"
            className="w-full text-md mt-4 break13:mt-0 mb-2"
          >
            Reset search values
          </Button>
        </Link>
        <SubmitBtn text="search" className="w-full uppercase mb-2"></SubmitBtn>
      </Form>
    </section>
  );
};
export default DevProjectsFilter;
