import { Form, Link, useLoaderData } from 'react-router-dom';
import { FormInput, SubmitBtn, FormSelect } from '@/components';
import {
  projectStatusFilter,
  projectSortFilter,
  projectLimitFilter,
  type ParamsData,
  type SearchParams,
} from '@/utils';
import { Button } from '@/components/ui/button';

const AllProjectsFilter = ({
  numOfAllProjects,
  numOfFilteredProjects,
}: {
  numOfAllProjects: number;
  numOfFilteredProjects: number;
}) => {
  const { params } = useLoaderData() as ParamsData;

  const { search, status, sort, limit } = params as SearchParams;
  console.log(params);

  return (
    <div className="w-full p-4 bg-background border rounded-md mb-4">
      <h1>Total: {numOfAllProjects} projects</h1>
      <h1>Filtered: {numOfFilteredProjects} projects</h1>
      <Form>
        <FormInput
          name="search"
          type="search"
          inputClass="bg-input"
          placeholder="Project name..."
          defaultValue={search}
        />
        <FormSelect
          name="status"
          label="Status"
          options={projectStatusFilter}
          layoutClass="mt-4"
          defaultValue={status}
        />
        <FormSelect
          name="sort"
          label="Sort"
          options={projectSortFilter}
          layoutClass="mt-4"
          defaultValue={sort}
        />
        <FormSelect
          name="limit"
          label="limit"
          options={projectLimitFilter}
          layoutClass="mt-4"
          defaultValue={limit}
        />
        <Button asChild variant="outline">
          <Link to={'/dashboard/projects'}>Reset search values</Link>
        </Button>
        <SubmitBtn text="search" className="uppercase"></SubmitBtn>
      </Form>
    </div>
  );
};
export default AllProjectsFilter;
