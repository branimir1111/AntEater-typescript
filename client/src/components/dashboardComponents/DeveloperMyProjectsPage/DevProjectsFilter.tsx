import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from '@/components/FormInput';
import {
  projectStatusFilter,
  projectSortFilter,
  projectLimitFilter,
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
  const { search, status, sort, limit } = params;
  return (
    <section className="w-full mt-4">
      <div className="w-full mb-2 break7:flex gap-4">
        <h1>
          Total projects:{' '}
          <span className="font-bold text-cyan-vivid-600">
            {numOfAllProjects}
          </span>
        </h1>
        <h1>
          Your projects:{' '}
          <span className="font-bold text-cyan-vivid-600">
            {numOfFilteredProjects}
          </span>
        </h1>
      </div>
      <Form className="w-full grid break6:gap-x-4 items-end break6:grid-cols-2 break13:grid-cols-3 bg-background p-4 rounded-md border">
        <FormInput
          type="search"
          name="search"
          label="Seach"
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
        <FormSelect
          name="limit"
          options={projectLimitFilter}
          layoutClass="mt-4"
          defaultValue={limit}
        />
        <SubmitBtn text="search" className="w-full uppercase mb-2"></SubmitBtn>
        <Link to={'/dashboard/my-projects'}>
          <Button
            variant="outline"
            className="w-full text-md mt-4 break13:mt-0 mb-2"
          >
            Reset search values
          </Button>
        </Link>
      </Form>
    </section>
  );
};
export default DevProjectsFilter;
