import { Form, Link, useLoaderData } from 'react-router-dom';
import { FormInput, SubmitBtn, FormSelect } from '@/components';
import {
  projectStatusFilter,
  projectSortFilter,
  projectLimitFilter,
  type ParamsData,
  type SearchParams,
} from '@/utils';
// import { Button } from '@/components/ui/button';

const AllProjectsFilter = ({
  numOfAllProjects,
  numOfFilteredProjects,
}: {
  numOfAllProjects: number;
  numOfFilteredProjects: number;
}) => {
  const { params } = useLoaderData() as ParamsData;

  const { search, status, sort, limit } = params as SearchParams;

  return (
    <div className="w-full p-4 bg-background border rounded-md mb-4">
      <div className="w-full mb-2 break7:flex gap-4">
        <h1>
          Total:{' '}
          <span className="font-bold text-cyan-vivid-600">
            {numOfAllProjects} project{numOfAllProjects > 1 ? 's' : null}
          </span>
        </h1>
        <h1>
          Filtered:{' '}
          <span className="font-bold text-cyan-vivid-600">
            {numOfFilteredProjects} project
            {numOfFilteredProjects > 1 ? 's' : null}
          </span>
        </h1>
      </div>
      <Form className="w-full grid break6:gap-x-4 items-end break6:grid-cols-2 break13:grid-cols-3">
        <FormInput
          name="search"
          type="search"
          layoutClass="w-full"
          inputClass="bg-input mt-1"
          placeholder="Project name..."
          defaultValue={search}
        />
        <FormSelect
          name="status"
          label="Status"
          options={projectStatusFilter}
          layoutClass="w-full mt-4"
          defaultValue={status}
        />
        <FormSelect
          name="sort"
          label="Sort"
          options={projectSortFilter}
          layoutClass="w-full mt-4"
          defaultValue={sort}
        />
        <FormSelect
          name="limit"
          label="limit"
          options={projectLimitFilter}
          layoutClass="w-full mt-4"
          defaultValue={limit}
        />
        {/* <Button
          variant="outline"
          className="w-full mt-4 break13:mt-0 mb-2 uppercase"
        >
          <Link to={'/dashboard/projects'}>Reset search values</Link>
        </Button> */}
        <SubmitBtn text="search" className="w-full uppercase mb-2"></SubmitBtn>
      </Form>
    </div>
  );
};
export default AllProjectsFilter;
