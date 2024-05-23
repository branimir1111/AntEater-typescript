import { Form, Link, useLoaderData } from 'react-router-dom';
import { FormInput, SubmitBtn, FormSelect } from '@/components';
import {
  projectStatusFilter,
  projectSortFilter,
  projectLimitFilter,
  type SearchParams,
} from '@/utils';
import { Button } from '@/components/ui/button';

type FIlterProps = {
  numOfAllProjects: number;
  numOfFilteredProjects: number;
};

type SearchParamsProp = {
  searchValues: SearchParams;
};

const AllProjectsFilter = ({
  numOfAllProjects,
  numOfFilteredProjects,
}: FIlterProps) => {
  const { searchValues } = useLoaderData() as SearchParamsProp;

  const { search, status, sort, limit } = searchValues;

  return (
    <div className="w-full p-4 bg-background border rounded-md mb-4">
      <div className="w-full mb-2 break7:flex gap-4">
        <h1>
          Total projects:{' '}
          <span className="font-bold text-cyan-vivid-600">
            {numOfAllProjects}
          </span>
        </h1>
        <h1>
          Filtered projects:{' '}
          <span className="font-bold text-cyan-vivid-600">
            {numOfFilteredProjects}
          </span>
        </h1>
      </div>
      <Form className="w-full grid break6:gap-x-4 items-end break6:grid-cols-2 break13:grid-cols-3">
        <FormInput
          name="search"
          type="search"
          label="Search"
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
        <SubmitBtn text="search" className="w-full uppercase mb-2"></SubmitBtn>
        <Link to="/dashboard/projects">
          <Button
            variant="outline"
            className="w-full text-md mt-4 break13:mt-0 mb-2"
          >
            Reset search values
          </Button>
        </Link>
      </Form>
    </div>
  );
};
export default AllProjectsFilter;
