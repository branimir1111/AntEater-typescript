import { useLoaderData, Form, Link } from 'react-router-dom';
import { FormInput, FormSelect, SubmitBtn } from '@/components';
import {
  projectStatusFilter,
  projectSortFilter,
  projectLimitFilterSecond,
} from '@/utils';
import { Button } from '@/components/ui/button';

type allAdminProjectsQueryParams = {
  search: string;
  status: string;
  sort: string;
  limit: string;
  page: string | number;
};
type SearchParamsType = {
  searchParams: allAdminProjectsQueryParams;
};
const AdminProjectsFilter = () => {
  const { searchParams } = useLoaderData() as SearchParamsType;
  const { search, status, sort, limit } = searchParams;

  return (
    <Form className="grid break7:grid-cols-2 break7:gap-x-4 break13:grid-cols-3 break18:grid-cols-6">
      <FormInput
        name="search"
        type="search"
        label="Search"
        inputClass="bg-input mt-1"
        placeholder="Project name..."
        defaultValue={search}
      />
      <FormSelect
        name="status"
        label="Status"
        options={projectStatusFilter}
        layoutClass="w-full"
        defaultValue={status}
      />
      <FormSelect
        name="sort"
        label="Sort"
        options={projectSortFilter}
        layoutClass="w-full"
        defaultValue={sort}
      />
      <FormSelect
        name="limit"
        label="limit"
        options={projectLimitFilterSecond}
        layoutClass="w-full"
        defaultValue={limit}
      />
      <SubmitBtn
        text="search"
        className="w-full uppercase self-end mt-4 break13:mt-0 break13:mb-2"
      ></SubmitBtn>
      <Link
        to="/dashboard/admin"
        className="self-end mt-4 break13:mt-0 break13:mb-2"
      >
        <Button variant="outline" className="w-full text-md">
          Reset
        </Button>
      </Link>
    </Form>
  );
};
export default AdminProjectsFilter;
