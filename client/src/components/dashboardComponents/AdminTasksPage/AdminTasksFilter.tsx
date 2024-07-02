import { useLoaderData, Form, Link } from 'react-router-dom';
import { FormInput, FormSelect, SubmitBtn } from '@/components';
import {
  taskStatusSecond,
  taskTypeSecond,
  taskPrioritySecond,
  taskSortFilter,
  taskLimitFilterSecond,
} from '@/utils';
import { Button } from '@/components/ui/button';

type allAdminTasksQueryParams = {
  search: string;
  taskType: string;
  priority: string;
  status: string;
  sort: string;
  limit: string;
  page: string | number;
};
type SearchParamsType = {
  searchParams: allAdminTasksQueryParams;
};

const AdminTasksFilter = () => {
  const { searchParams } = useLoaderData() as SearchParamsType;
  const { search, taskType, priority, status, sort, limit } = searchParams;
  return (
    <Form className="grid break7:grid-cols-2 break7:gap-x-4 break13:grid-cols-3 break18:grid-cols-6">
      <FormInput
        name="search"
        type="search"
        label="Search"
        inputClass="bg-input mt-1"
        placeholder="Task title..."
        defaultValue={search}
      />
      <FormSelect
        name="taskType"
        label="Type"
        options={taskTypeSecond}
        layoutClass="w-full"
        defaultValue={taskType}
      />
      <div className="flex gap-4">
        <FormSelect
          name="priority"
          label="Priority"
          options={taskPrioritySecond}
          layoutClass="w-full"
          defaultValue={priority}
        />
        <FormSelect
          name="status"
          label="Status"
          options={taskStatusSecond}
          layoutClass="w-full"
          defaultValue={status}
        />
      </div>
      <div className="flex gap-4">
        <FormSelect
          name="sort"
          label="Sort"
          options={taskSortFilter}
          layoutClass="w-full"
          defaultValue={sort}
        />
        <FormSelect
          name="limit"
          label="limit"
          options={taskLimitFilterSecond}
          layoutClass="w-full"
          defaultValue={limit}
        />
      </div>
      <SubmitBtn
        text="search"
        className="w-full uppercase self-end mt-4 break13:mt-0 break13:mb-2"
      ></SubmitBtn>
      <Link
        to="/dashboard/admin-tasks"
        className="self-end mt-4 break13:mt-0 break13:mb-2"
      >
        <Button variant="outline" className="w-full text-md">
          Reset
        </Button>
      </Link>
    </Form>
  );
};
export default AdminTasksFilter;
